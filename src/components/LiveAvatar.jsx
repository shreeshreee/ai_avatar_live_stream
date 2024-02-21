import React from "react";

function LiveAvatar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ margin: 'auto' }}>
        <video controls autoPlay style={{ height: "50vh", borderRadius: '1rem' }}>
          <source src="https://apis.elai.io/public/video/65cdeb2a3592b986868c4be2.mp4?s=ca9ddff1f0e8e65aefaa2094f78ff8974a969021020503ff9715521d322f8741" type="video/mp4" />
          {/* <source src="https://apis.elai.io/public/video/65cde7c19f48491e39b81c61.mp4?s=d2d527e70f2200d39444a08fc9ba002e4852a13ca5f886d3d89cad18791c7868" type="video/mp4" /> */}
          {/* <source src="https://elai-us-prod.s3.us-east-2.amazonaws.com/production/videos/65cdeb2a3592b986868c4be2/video-name.mp4" type="video/mp4" /> */}
        </video>
      </div>
    </div>
  );
}

export default LiveAvatar;
