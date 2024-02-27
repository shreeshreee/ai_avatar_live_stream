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
{/* <div class="w-full grid grid-cols-1 border-2 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative"> */}
                    {/* {newsContent.map((news, index) => (
                        <div class="w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
                            <div class="p-4 bg-fuchsia-700 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock">
                                    {/* <circle cx="12" cy="12" r="10"></circle> */}
                                    {/* <polyline points="12 6 12 12 16 14"></polyline> */}
                                    {/* <Radio className={`${darkTheme ? "text-white" : "text-white"}`} />
                                </svg>
                            </div>
                            <h3 class="text-lg font-bold sm:text-xl">{index + 1}. {news.headline}</h3>

                            <p class="text-sm sm:text-base text-start my-2">{news.description}</p>
                        </div> */}
                    {/* // ))} */}
                // </div>