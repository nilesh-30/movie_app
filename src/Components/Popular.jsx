import { useEffect, useState } from 'react';
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import Loading from "../Components/Partials/Loading"
import Cards from './Partials/Cards';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
    document.title = "Movie | Popular"
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`${category}/popular?page=${page}`);

            if (data.results.length > 0) {
                setpopular((prevState) => [...prevState, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error",error);
        }
    }

    const refreshhandler = () => {
        if(popular.length === 0) {
            GetPopular()
        } else {
            setpage(1);
            setpopular([]);
            GetPopular();
        }
    }

    useEffect(() => {
        refreshhandler();
    }, [category])

    return popular.length > 0 ? (
        <div className='w-full h-full'>
            <Topnav />
            <div className='flex items-center justify-between text-white pt-16'>
                <h1 className='font-medium text-2xl text-green-400 py-8 px-8'>Popular</h1>
                <div className='flex items-center gap-6 mr-8'>
                    <Dropdown title="Category" options={["movie", "tv"]} func={(e) => setcategory(e.target.value)} />
                </div>
            </div>

            <InfiniteScroll dataLength={popular.length} next={GetPopular} hasMore={hasMore} loader={<h1 className='bg-black text-white font-semibold text-2xl flex justify-center p-2'>Loading...</h1>}>
                <Cards data={popular} />
            </InfiniteScroll>
        </div>
    ) : (<Loading />)
}

export default Popular