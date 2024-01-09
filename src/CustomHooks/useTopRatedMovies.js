import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/Redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topratedMovies);
  const getTopMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRated && getTopMovies();
  }, []);
};
export default useTopRatedMovies;
