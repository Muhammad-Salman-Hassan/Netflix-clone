import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import { Movie } from "../interfaces";
import requests from "../utils/Request";
import Login from "./Login";

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentries: Movie[];
}

const Home = ({
  netflixOriginals,
  topRated,
  trendingNow,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentries,
}: Props) => {
  console.log(netflixOriginals);
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Netflix-clone</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ">
      <Banner netflixOriginals={netflixOriginals} />
      <section className="md:space-y-24">
        <Row title="TopRated" movie={topRated}/>
        <Row title="Trending" movie={trendingNow}/>
        <Row title="Action Movies" movie={actionMovies}/>
        <Row title="Comedy Movies" movie={comedyMovies}/>
        <Row title="Horror Movies" movie={horrorMovies}/>
        <Row title="Romance Movies" movie={romanceMovies}/>
        <Row title="Documentries" movie={documentries}/>
      </section>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentries: documentries.results,
    },
  };
};
