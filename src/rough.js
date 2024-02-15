import React, { useState, useEffect, useRef } from "react";

function App() {
  const DID_API = {
    "key": "YW5pbWF0aW9uYXBleDFAZ21haWwuY29t:oN87C9_WEuB1Qhe2LGQde",
    "url": "https://api.d-id.com",
    "service": "clips"
  };

  const RTCPeerConnection = (
    window.RTCPeerConnection ||
    window.webkitRTCPeerConnection ||
    window.mozRTCPeerConnection
  ).bind(window);

  let peerConnection;
  let streamId;
  let sessionId;
  let sessionClientAnswer;

  let statsIntervalId;
  let videoIsPlaying;
  let lastBytesReceived;

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.setAttribute('playsinline', '');
    }
  }, []);

  const peerStatusLabel = useRef(null);
  const iceStatusLabel = useRef(null);
  const iceGatheringStatusLabel = useRef(null);
  const signalingStatusLabel = useRef(null);
  const streamingStatusLabel = useRef(null);

  const[psl,setPSL]=useState('Not connected')
  const[isl,setISL]=useState('Not connected')
  const[igsl,setIGSL]=useState('Not Gathered')  
  const[ssl,setSSL]=useState('Not connected')
  const[stsl,setSTSL]=useState('Not connected')
  useEffect(() => {
    if (!peerStatusLabel.current) peerStatusLabel.current = document.createElement('div');
    if (!iceStatusLabel.current) iceStatusLabel.current = document.createElement('div');
    if (!iceGatheringStatusLabel.current) iceGatheringStatusLabel.current = document.createElement('div');
    if (!signalingStatusLabel.current) signalingStatusLabel.current = document.createElement('div');
    if (!streamingStatusLabel.current) streamingStatusLabel.current = document.createElement('div');
  }, []);

  const maxRetryCount = 3;
  const maxDelaySec = 4;

  async function fetchWithRetries(url, options, retries = 1) {
    try {
      return await fetch(url, options);
    } catch (err) {
      if (retries <= maxRetryCount) {
        const delay = Math.min(Math.pow(2, retries) / 4 + Math.random(), maxDelaySec) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
        console.log(`Request failed, retrying ${retries}/${maxRetryCount}. Error ${err}`);
        return fetchWithRetries(url, options, retries + 1);
      } else {
        throw new Error(`Max retries exceeded. error: ${err}`);
      }
    }
  }

  function stopAllStreams() {
    if (videoRef.current && videoRef.current.srcObject) {
      console.log('stopping video streams');
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }

  function onIceGatheringStateChange() {
    if (iceGatheringStatusLabel.current) {
      iceGatheringStatusLabel.current.innerText = peerConnection.iceGatheringState;
      setIGSL((peerConnection.iceGatheringState))
      iceGatheringStatusLabel.current.className = 'iceGatheringState-' + peerConnection.iceGatheringState;
    } else {
      console.error('iceGatheringStatusLabel status label ref is not assigned');
    }
  }

  function onIceCandidate(event) {
    console.log('onIceCandidate', event);
    if (event.candidate) {
      const { candidate, sdpMid, sdpMLineIndex } = event.candidate;
      fetch(`${DID_API.url}/${DID_API.service}/streams/${streamId}/ice`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${DID_API.key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          candidate,
          sdpMid,
          sdpMLineIndex,
          session_id: sessionId,
        }),
      });
    }
  }

  function onIceConnectionStateChange() {
    if (iceStatusLabel.current) {
      iceStatusLabel.current.innerText = peerConnection.iceConnectionState;
      setISL((peerConnection.iceConnectionState))
      iceStatusLabel.current.className = 'iceConnectionState-' + peerConnection.iceConnectionState;
      if (peerConnection.iceConnectionState === 'failed' || peerConnection.iceConnectionState === 'closed') {
        stopAllStreams();
        closePC();
      }
    } else {
      console.error('iceStatusLabel status label ref is not assigned');
    }
  }

  function onConnectionStateChange() {
    // not supported in firefox
    if (peerStatusLabel.current) {
      peerStatusLabel.current.innerText = peerConnection.connectionState;
      setPSL((peerConnection.connectionState))
      peerStatusLabel.current.className = 'peerConnectionState-' + peerConnection.connectionState;
    } else {
      console.error('Signaling status label ref is not assigned');
    }
  }

  function onSignalingStateChange() {
  if (signalingStatusLabel.current) {
    signalingStatusLabel.current.innerText = peerConnection.signalingState;
    setSSL((peerConnection.signalingState))
    signalingStatusLabel.current.className = 'signalingState-' + peerConnection.signalingState;
  } else {
    console.error('Signaling status label ref is not assigned');
  }
}


  function setVideoElement(stream) {
    if (!stream) return;
    videoRef.current.srcObject = stream;
    videoRef.current.loop = false;

    // safari hotfix
    if (videoRef.current.paused) {
      videoRef.current.play().then((_) => {}).catch((e) => {});
    }
  }

  function playIdleVideo() {
    videoRef.current.srcObject = undefined;
    videoRef.current.src = DID_API.service == 'clips' ? 'rian_idle.mp4' : 'or_idle.mp4';
    videoRef.current.loop = true;
  }

  function onVideoStatusChange(videoIsPlaying, stream) {
    let status;
    if (videoIsPlaying) {
      status = 'streaming';
      const remoteStream = stream;
      setVideoElement(remoteStream);
    } else {
      status = 'empty';
      playIdleVideo();
    }
    if (streamingStatusLabel.current) {
      streamingStatusLabel.current.innerText = status;
      setSTSL((status))
      streamingStatusLabel.current.className = 'streamingState-' + status;
    } else {
      console.error('streamingStatusLabel status label ref is not assigned');
    }
  }

  function onTrack(event) {
    if (!event.track) return;

    statsIntervalId = setInterval(async () => {
      const stats = await peerConnection.getStats(event.track);
      stats.forEach((report) => {
        if (report.type === 'inbound-rtp' && report.mediaType === 'video') {
          const videoStatusChanged = videoIsPlaying !== report.bytesReceived > lastBytesReceived;
          if (videoStatusChanged) {
            videoIsPlaying = report.bytesReceived > lastBytesReceived;
            onVideoStatusChange(videoIsPlaying, event.streams[0]);
          }
          lastBytesReceived = report.bytesReceived;
        }
      });
    }, 500);
  }

  function closePC(pc = peerConnection) {
    if (!pc) return;
    console.log('stopping peer connection');
    pc.close();
    pc.removeEventListener('icegatheringstatechange', onIceGatheringStateChange, true);
    pc.removeEventListener('icecandidate', onIceCandidate, true);
    pc.removeEventListener('iceconnectionstatechange', onIceConnectionStateChange, true);
    pc.removeEventListener('connectionstatechange', onConnectionStateChange, true);
    pc.removeEventListener('signalingstatechange', onSignalingStateChange, true);
    pc.removeEventListener('track', onTrack, true);
    clearInterval(statsIntervalId);
    iceGatheringStatusLabel.current.innerText = '';
    signalingStatusLabel.current.innerText = '';
    iceStatusLabel.current.innerText = '';
    peerStatusLabel.current.innerText = '';
    console.log('stopped peer connection');
    if (pc === peerConnection) {
      peerConnection = null;
    }
  }

  const presenterInputByService = {
    talks: {
      source_url: 'https://d-id-public-bucket.s3.amazonaws.com/or-roman.jpg',
    },
    clips: {
      presenter_id: 'amy-Aq6OmGZnMt',
      driver_id: 'Vcq0R4a8F0'
    }
  };

  async function createPeerConnection(offer, iceServers) {
    if (!peerConnection) {
      peerConnection = new RTCPeerConnection({ iceServers });
      peerConnection.addEventListener('icegatheringstatechange', onIceGatheringStateChange, true);
      peerConnection.addEventListener('icecandidate', onIceCandidate, true);
      peerConnection.addEventListener('iceconnectionstatechange', onIceConnectionStateChange, true);
      peerConnection.addEventListener('connectionstatechange', onConnectionStateChange, true);
      peerConnection.addEventListener('signalingstatechange', onSignalingStateChange, true);
      peerConnection.addEventListener('track', onTrack, true);
    }

    await peerConnection.setRemoteDescription(offer);
    console.log('set remote sdp OK');

    const sessionClientAnswer = await peerConnection.createAnswer();
    console.log('create local sdp OK');

    await peerConnection.setLocalDescription(sessionClientAnswer);
    console.log('set local sdp OK');

    return sessionClientAnswer;
  }

  async function Connect() {
    if (peerConnection && peerConnection.connectionState === 'connected') {
      return;
    }

    stopAllStreams();
    closePC();

    const sessionResponse = await fetchWithRetries(`${DID_API.url}/${DID_API.service}/streams`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${DID_API.key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(presenterInputByService[DID_API.service]),
    });

    const { id: newStreamId, offer, ice_servers: iceServers, session_id: newSessionId } = await sessionResponse.json();
    streamId = newStreamId;
    sessionId = newSessionId;

    try {
      sessionClientAnswer = await createPeerConnection(offer, iceServers);
    } catch (e) {
      console.log('error during streaming setup', e);
      stopAllStreams();
      closePC();
      return;
    }

    const sdpResponse = await fetch(`${DID_API.url}/${DID_API.service}/streams/${streamId}/sdp`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${DID_API.key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer: sessionClientAnswer,
        session_id: sessionId,
      }),
    });
  }

  return (
    <div>
  <div id="video-wrapper">
    <div>
      <video ref={videoRef} width="400" height="400" autoPlay></video>
    </div>
  </div>
  <br />
  <div id="status">
    <div>Peer Connection Status: {psl}</div>
    <div>ICE Connection Status: {isl}</div>
    <div>ICE Gathering Status: {igsl}</div>
    <div>Signaling Status: {ssl}</div>
    <div>Streaming Status: {stsl}</div>
  </div>
  <br />
  <div id="buttons">
    <button onClick={Connect}>Connect</button>
    <button>Start</button>
    <button>Destroy</button>
  </div>
</div>

  )
}
export default App;
