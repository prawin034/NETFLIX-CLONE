import { useEffect, useState } from 'react';
import requests from '../key';
import axios from 'axios';
import HomeCompo from '../components/HomeCompo';
import RowCompo from '../components/RowCompo';

const HomePage = () => {
  const [movies, setmovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.requestpopular)
      .then((res) => setmovies(res.data.results));
  }, []);

  return (
    <>
      <HomeCompo data={movie} />

      <main>
        <RowCompo
          rowID="1"
          title="Upcoming"
          fetchUrl={requests.requestupcoming}
        />
        <RowCompo
          rowID="2"
          title="Now Playing"
          fetchUrl={requests.requestnowplaying}
        />
        <RowCompo
          rowID="3"
          title="Popular"
          fetchUrl={requests.requestToprated}
        />
        <RowCompo
          rowID="4"
          title="Top Rated"
          fetchUrl={requests.requestpopular}
        />
      </main>
    </>
  );
};

export default HomePage;
