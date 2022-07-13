import { InformationCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseurl } from "../constant/MoviesURL";
import { Movie } from "../interfaces";
import { FaPlay } from 'react-icons/fa'

interface Props {
  netflixOriginals: Movie[];
}
const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setmovie] = useState<Movie | null>(null);
  // const BASE_URL = 'https://api.themoviedb.org/3'

  useEffect(() => {
    // setmovie(Math.floor(Math.random() * netflixOriginals.length))
    setmovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[85vh] lg:justify-end">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10 ">
        <Image
          src={`${baseurl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl pl-4 ">                                                                                                                     
        {movie?.title || movie?.name}
      </h1>                                                                                                                                                                                                                                                                                                                                                   
      <p className="max-w-xs text-shadow-md                                                                                                                                                                                                                                                                                                                                                    text-xs md:max-w-lg md:text-lg lg:max-w-xl lg:text-xl mx-4">
        {movie?.overview}
      </p>

      <div className="flex space-x-3 pl-4">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>

        <button
          className="bannerButton bg-[gray]/70"

        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
