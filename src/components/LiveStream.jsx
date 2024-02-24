import React, { useState, useEffect } from "react";
import { API } from '../ApiClient';
import axios from "axios";

function LiveStream() {
  const [videoSrc, setVideoSrc] = useState("");

//   useEffect(() => {
//     const fetchVideo = async () => {
//       const response = await fetch(API+"video-stream");
//       const reader = response.body.getReader();
//       const stream = new ReadableStream({
//         start(controller) {
//           const pump = async () => {
//             const { done, value } = await reader.read();
//             if (done) {
//               setVideoSrc("/video-stream");
//               return;
//             }
//             controller.enqueue(value);
//             await pump();
//           };
//           pump();
//         },
//       });
//       const blob = new Blob([stream], { type: "video/webm" });
//       setVideoSrc(URL.createObjectURL(blob));
//     };
//     fetchVideo();
//   }, []);

  return (
    <div>
      <video controls autoPlay={true} className="rounded-md border" >
        <source src="http://localhost:8000/stream" type="video/mp4" />
      </video>
    </div>
  );
}

export default LiveStream;
