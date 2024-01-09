import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
  // console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[34%] bg-black md:pt-0 ">
      <Videotitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
