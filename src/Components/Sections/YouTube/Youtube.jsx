import { useEffect, useState } from "react";
import "./Youtube.css";

function Youtube() {
  const [YouTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=12&order=date&key=AIzaSyCPm_6C-yoWRq91JMFe7sHrBIoNoG2jcSo"
    )
      .then((res) => res.json())
      .then((data) => {
        setYouTubeVideos(data.items);
      });
  }, []);
  return (
    <>
      <section className="youTubeVideosWrapper">
        <div className="allVideosWrapper">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12">
                <div className="title-wrapper">
                  <br />
                  <h1>Latest Video</h1>
                  <br />
                </div>
              </div>
              {YouTubeVideos?.map((singleVideo, i) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                let videoWrapper = (
                  <div key={i} className="col-sm-12 col-md-6 col-lg-3">
                    <div className="singleVideoWrapper">
                      <div className="videoThumbnail">
                        <a href={vidLink} target="_blank" rel="noreferrer">
                          <img
                            src={singleVideo.snippet.thumbnails.high.url}
                            alt="thumbnales"
                          />
                        </a>
                      </div>
                      <div className="videoInfoWrapper">
                        <div className="videoTitle">
                          <a href={vidLink} target="_blank" rel="noreferrer">
                            {singleVideo.snippet.title}
                          </a>
                        </div>
                        <div className="videoDesc">
                          {singleVideo.snippet.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
                return videoWrapper;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Youtube;
