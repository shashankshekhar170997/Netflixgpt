import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailorVideo } from "../utils/Redux/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailorVideo);
  // fetch trailer video and updating the store with trailer video data
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    // setTrailerId(trailer.key);
    // Dispatch an action.
    dispatch(addTrailorVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};
export default useMovieTrailer;
