import React, { useState, useEffect, useRef } from "react";
import video from './rian_idle.mp4';

let peerConnection;
let streamId;
let sessionId;
let sessionClientAnswer;

let statsIntervalId;
let videoIsPlaying;
let lastBytesReceived;

function App() {
  const DID_API = {
    "key1": "YW5pbWF0aW9uYXBleDFAZ21haWwuY29t:oN87C9_WEuB1Qhe2LGQde",
    "key": "dmFraXMyNzIwMkBvcHJldm9sdC5jb20:fyq2z2ltfjqeOcMDs_bJw",
    "url": "https://api.d-id.com",
    "service": "clips"
  };

  const RTCPeerConnection = (
    window.RTCPeerConnection ||
    window.webkitRTCPeerConnection ||
    window.mozRTCPeerConnection
  ).bind(window);

  const videoRef = useRef(null);

  // useEffect(() => {
  //   const videoElement = videoRef.current;
  //   console.log(videoElement,'%%%%%%%%')
  //   if (videoElement) {
  //     videoElement.setAttribute('playsinline', '');
  //   }
  // }, []);

  // useEffect(() => {
  //   playIdleVideo();
  // }, []);

  const [videoSource, setVideoSource] = useState(DID_API.service === 'clips' ? 'rian_idle.mp4' : 'or_idle.mp4');
  const [isStreaming, setIsStreaming] = useState(false);

  const peerStatusLabel = useRef(null);
  const iceStatusLabel = useRef(null);
  const iceGatheringStatusLabel = useRef(null);
  const signalingStatusLabel = useRef(null);
  const streamingStatusLabel = useRef(null);

  const [psl, setPSL] = useState('Not connected')
  const [isl, setISL] = useState('Not connected')
  const [igsl, setIGSL] = useState('Not Gathered')
  const [ssl, setSSL] = useState('Not connected')
  const [stsl, setSTSL] = useState('Not connected')
  useEffect(() => {
    if (!peerStatusLabel.current) peerStatusLabel.current = document.createElement('div');
    if (!iceStatusLabel.current) iceStatusLabel.current = document.createElement('div');
    if (!iceGatheringStatusLabel.current) iceGatheringStatusLabel.current = document.createElement('div');
    if (!signalingStatusLabel.current) signalingStatusLabel.current = document.createElement('div');
    if (!streamingStatusLabel.current) streamingStatusLabel.current = document.createElement('div');
  }, []);

  const maxRetryCount = 1;
  const maxDelaySec = 4;

  async function fetchWithRetries(url, options, retries = 1) {
    console.log(url, options, retries)
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
      console.error('peerStatusLabel status label ref is not assigned');
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
    console.log(stream)
    console.log(typeof (stream), !stream)

    if (!stream) return;
    videoRef.current.srcObject = stream;
    videoRef.current.loop = false;

    // safari hotfix
    if (videoRef.current.paused) {
      videoRef.current.play().then((_) => { }).catch((e) => { });
    }
  }

  function playIdleVideo() {
    console.log('in playing video ...')
    videoRef.current.srcObject = undefined;
    videoRef.current.src = DID_API.service === 'clips' ? { video } : 'or_idle.mp4';
    videoRef.current.loop = true;
    console.log(videoRef.current.srcObject, videoRef.current.src, videoRef.current.loop, '&&&&&&&&&&&&&&&&&&')
  }

  function onVideoStatusChange(videoIsPlaying, stream) {
    let status;
    console.log(videoIsPlaying, stream, typeof (stream))
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
    /**
     * The following code is designed to provide information about wether currently there is data
     * that's being streamed - It does so by periodically looking for changes in total stream data size
     *
     * This information in our case is used in order to show idle video while no video is streaming.
     * To create this idle video use the POST https://api.d-id.com/talks (or clips) endpoint with a silent audio file or a text script with only ssml breaks
     * https://docs.aws.amazon.com/polly/latest/dg/supportedtags.html#break-tag
     * for seamless results use `config.fluent: true` and provide the same configuration as the streaming video
     */

    if (!event.track) return;

    statsIntervalId = setInterval(async () => {
      const stats = await peerConnection.getStats(event.track);
      stats.forEach((report) => {
        if (report.type === 'inbound-rtp' && report.mediaType === 'video') {
          const videoStatusChanged = videoIsPlaying !== report.bytesReceived > lastBytesReceived;
          console.log(videoStatusChanged, videoIsPlaying, report.bytesReceived > lastBytesReceived, '******')
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
    // clips:{
    //   presenter_id: 'rian-lZC6MmWfC1',
    //   driver_id: 'mXra4jY38i'
    // }
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


  async function Start() {
    // connectionState not supported in firefox
    console.log(ssl, isl, streamId, sessionId)
    if (ssl === 'stable' || isl === 'connected') {
      const playResponse = await fetchWithRetries(`${DID_API.url}/${DID_API.service}/streams/${streamId}`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${DID_API.key}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          script: {
            type: 'text',
            input: "Rahul Gandhi attacks the BJP over a farmers' protest. The BJP releases a candidate list for the Rajya Sabha election. Australia beats India in the U19 World Cup to win their fourth title. The Pakistan election results are live, with Sharif looking for allies and PTI protesting in the UK and US",
          },
          ...(DID_API.service === 'clips' && {
            background: {
              color: '#FFFFFF'
            }
          }),
          config: {
            stitch: true,
          },
          session_id: sessionId,
        }),
      });
    }
  };

  const url222 = 'https://8cce-35-196-57-61.ngrok-free.app/stream_summary/';

  read(url222);

  async function read(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });

    const data = response.body;
    if (!data) {
      return;
    }

    // console.log(data)
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      console.log(decoder.decode(value));
      // console.log(value)
    }
  }

  return (
    <div>
      <div>
        <div className="border-2 m-4 p-4">
          <video ref={videoRef} width="400" height="400" autoPlay></video>
          {/* <video ref={videoRef} width="400" height="400" autoPlay controls playsInline src={video} loop=""></video> */}
        </div>
      </div>
      <br />
      <div className="border-2 m-3 p-3 text-center">
        <div>Peer Connection Status: {psl}</div>
        <div>ICE Connection Status: {isl}</div>
        <div>ICE Gathering Status: {igsl}</div>
        <div>Signaling Status: {ssl}</div>
        <div>Streaming Status: {stsl}</div>
      </div>
      <br />
      <div className="border-2 m-3 p-3">
        <button className="border-2 m-4 p-2 rounded-md" onClick={Connect}>Connect</button>
        <button className="border-2 m-4 p-2 rounded-md" onClick={Start}>Start</button>
        <button className="border-2 m-4 p-2 rounded-md" >Destroy</button>
      </div>
    </div>

  )
}
export default App;
