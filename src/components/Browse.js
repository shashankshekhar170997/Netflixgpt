import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopularMovies from "../CustomHooks/usePopularMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import useUpcomingMovies from "../CustomHooks/useUpcomingMovies";

const Browse = () => {
  // reading from store.
  const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SeconderyContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
