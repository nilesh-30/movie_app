import { useEffect, useState } from 'react';
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import Loading from "../Components/Partials/Loading"
import Cards from './Partials/Cards';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
    document.title = "Movie | Trending";
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);

            if (data.results.length > 0) {
                settrending((prevState) => [...prevState, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error",error);
        }
    }

    const refreshhandler = () => {
        if(trending.length === 0) {
            GetTrending()
        } else {
            setpage(1);
            settrending([]);
            GetTrending();
        }
    }

    useEffect(() => {
        refreshhandler();
    }, [category, duration])

    return trending.length > 0 ? (
        <div className='w-full h-full'>
            <Topnav />
            <div className='flex items-center justify-between text-white pt-16'>
                <h1 className='font-medium text-2xl text-green-400 py-8 px-8'>Trending</h1>
                <div className='flex items-center gap-6 pr-8'>
                    <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setcategory(e.target.value)} />
                    <Dropdown title="Duration" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
                </div>
            </div>

            <InfiniteScroll dataLength={trending.length} next={GetTrending} hasMore={hasMore} loader={<h1 className='bg-black text-white font-semibold text-2xl flex justify-center p-2'>Loading...</h1>}>
                <Cards data={trending} />
            </InfiniteScroll>
        </div>
    ) : (<Loading />)
}

export default Trending