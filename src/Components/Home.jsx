import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import Topnav from './Partials/Topnav';
import Header from './Partials/Header';
import HorizontalCards from './Partials/HorizontalCards';
import Dropdown from './Partials/Dropdown';
import Loading from './Partials/Loading';

const Home = () => {
    document.title = "Movie | Homepage"
    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");

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
        const { data } = await axios.get(`/trending/${category}/day`);
        settrending(data.results);
      } catch (error) {
        console.log("Error", error);
      }
    }

    useEffect(() => {
      GetTrending();
      !wallpaper && GetHeaderWallpaper();
    }, [category])

  return wallpaper && trending ? (
    <>
        <div className='w-full h-full overflow-auto overflow-x-hidden'>
          <Topnav />
          <Header data={wallpaper} />
          <div className='text-white w-full p-5 flex items-center justify-between'>
            <h1 className='text-3xl font-semibold text-zinc-400 mb-5'>Trending</h1>

            <Dropdown title={"Filter"} options={["tv","movie","all"]} func={(e) => setcategory(e.target.value)}/>
          </div>
          <HorizontalCards data={trending} />
        </div>
    </>
  ) : (<Loading />)
}

export default Home