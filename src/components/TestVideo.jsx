import React, { useEffect, useState } from "react";

// import { fetchEventSource } from '@microsoft/fetch-event-source';

function TestVideo() {

  return (
    <div className="h-[100vh] flex items-center bg-gray-100 justify-center text-center">
      <video controls autoPlay={true} className="rounded-md border" >
        <source src="http://localhost:8000/test_video" type="video/mp4" />
      </video>
      <div>
        

      </div>

    </div>
  )
}
export default TestVideo;


