import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../CustomHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailorVideo = useSelector((store) => store.movies?.trailorVideo);
  useMovieTrailer(movieId);
  // const [trailerId, setTrailerId] = useState(null);

  return (
    <div className="">
      <iframe
        // aspect-video for full screen
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailorVideo?.key +
          "?&autoplay=1&mute=1"
        }
        // src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
