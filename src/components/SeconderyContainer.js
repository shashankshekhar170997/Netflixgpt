import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SeconderyContainer = () => {
  const moviesData = useSelector((store) => store.movies);
  // console.log(moviesData);
  return (
    moviesData.nowPlayingMovies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={moviesData.nowPlayingMovies}
          />
          <MovieList title={"Trending"} movies={moviesData.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={moviesData.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={moviesData.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movies={moviesData.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SeconderyContainer;
