import React, { useEffect, useState } from "react";

// import { fetchEventSource } from '@microsoft/fetch-event-source';

function TestVideo() {
  function update() {
    const options = {
      method: 'PATCH',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer DJLWA456rHGfVOBDYWo3h0hp3Sy7hYYT'
      },
      body: JSON.stringify({
        public: true,
        data: {
          skipEmails: false,
          subtitlesEnabled: 'false',
          format: '16_9',
          musicUrl: 'https://elai-media.s3.eu-west-2.amazonaws.com/music/mixkit-driving-ambition-32.mp3',
          musicVolume: 0.17,
          resolution: 'FullHD'
        },
        template: {type: 'text-to-video'},
        slides: [
          {
            id: 1,
            canvas: {
              background: '#ffffff',
              version: '4.4.0',
              objects: [
                {
                  id: 1,
                  type: 'avatar',
                  src: 'https://elai-media.s3.eu-west-2.amazonaws.com/avatars/jade.png',
                  top: 20,
                  left: 150,
                  scaleX: 0.37,
                  scaleY: 0.37,
                  avatarType: 'transparent',
                  version: 2
                }
              ]
            },
            avatar: {id: 'flora', name: 'Flora', gender: 'female', version: 2},
            animation: 'fade_in',
            language: 'English',
            speech: 'Hey persist vishnu.',
            voiceType: 'text',
            voice: 'en-US-AriaNeural',
            voiceProvider: 'azure'
          }
        ],
        name: 'Video Name'
      })
    };
    
    fetch('https://apis.elai.io/api/v1/videos/65cdeb2a3592b986868c4be2', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <div className="h-[100vh] flex items-center bg-gray-100 justify-center text-center">
      {/* <video controls autoPlay={true} className="rounded-md border" >
        <source src="http://localhost:8000/test_video" type="video/mp4" />
      </video> */}
      <div>
        <button
          onClick={(e) => { update() }}
          className="border-2 bg-black text-white"
        >
          update
        </button>


      </div>

    </div>
  )
}
export default TestVideo;


