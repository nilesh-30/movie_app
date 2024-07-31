import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Sidenav from './Partials/Sidenav';
import Topnav from './Partials/Topnav';
import Header from './Partials/Header';
import Cards from './Partials/Cards';

const Home = () => {
    document.title = "Movie | Homepage"
    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);

    const GetHeaderWallpaper = async () =>  {
      try {
        const { data } = await axios.get(`/trending/all/day`);
        let randomdata = data.results[(Math.random() * data.results.length).toFixed()];
        setwallpaper(randomdata);
      } catch (error) {
        console.log("Error", error);
      }
    }

    const GetTrending = async () =>  {
      try {
        const { data } = await axios.get(`/trending/all/day`);
        settrending(data.results);
      } catch (error) {
        console.log("Error", error);
      }
    }

    useEffect(() => {
      !wallpaper && GetHeaderWallpaper();
      !trending && GetTrending();
    },[])
    console.log(trending)
  return wallpaper && trending ? (
    <>
        {/* <Sidenav /> */}
        <div className='w-full h-full overflow-auto overflow-x-hidden'>
          <Topnav />
          <Header data={wallpaper} />
          <Cards data={trending} />
        </div>
    </>
  ) : <h1>Loading</h1>
}

export default Home