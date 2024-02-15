import React from "react";

function LiveAvatar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ margin: 'auto' }}>
        <video controls autoPlay style={{ height: "50vh", borderRadius: '1rem' }}>
          <source src="https://apis.elai.io/public/video/65cdbdb04533bfff728207a5.mp4?s=8c1df9019f381bcf7a6027650c8999d035ec087e82a40ff1471ece5cda83ed11" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default LiveAvatar;
