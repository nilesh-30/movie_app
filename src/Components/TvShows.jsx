import { useEffect, useState } from 'react';
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import Loading from "../Components/Partials/Loading"
import Cards from './Partials/Cards';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const TvShows = () => {
    document.title = "Movie | TvShows"
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetTv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);

            if (data.results.length > 0) {
                settv((prevState) => [...prevState, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error",error);
        }
    }

    const refreshhandler = () => {
        if(tv.length === 0) {
            GetTv()
        } else {
            setpage(1);
            settv([]);
            GetTv();
        }
    }

    useEffect(() => {
        refreshhandler();
    }, [category])

    return tv.length > 0 ? (
        <div className='w-full h-full'>
            <Topnav />
            <div className='flex items-center justify-between text-white pt-16'>
                <h1 className='font-medium text-2xl text-green-400 py-8 px-8'>Tv Shows |<span className='ml-6 text-xl'>{category.toUpperCase()}</span></h1>
                <div className='flex items-center gap-6 mr-8'>
                    <Dropdown title="Category" options={["airing_today", "on_the_air", "popular", "top_rated"]} func={(e) => setcategory(e.target.value)} />
                </div>
            </div>

            <InfiniteScroll dataLength={tv.length} next={GetTv} hasMore={hasMore} loader={<h1 className='bg-black text-white font-semibold text-2xl flex justify-center p-2'>Loading...</h1>}>
                <Cards data={tv} />
            </InfiniteScroll>
        </div>
    ) : (<Loading />)
}

export default TvShows