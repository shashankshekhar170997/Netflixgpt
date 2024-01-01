import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SeconderyContainer />
    </div>
  );
};

export default Browse;
