import { useEffect, useState } from 'react';
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import Loading from "../Components/Partials/Loading"
import Cards from './Partials/Cards';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movies = () => {
    document.title = "Movie | Movies"
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);

            if (data.results.length > 0) {
                setmovie((prevState) => [...prevState, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error",error);
        }
    }

    const refreshhandler = () => {
        if(movie.length === 0) {
            GetMovie()
        } else {
            setpage(1);
            setmovie([]);
            GetMovie();
        }
    }

    useEffect(() => {
        refreshhandler();
    }, [category])

    return movie.length > 0 ? (
        <div className='w-full h-full'>
            <Topnav />
            <div className='flex items-center justify-between text-white pt-16'>
                <h1 className='font-medium text-2xl text-green-400 py-8 px-8'>Movies |<span className='ml-6 text-xl'>{category.toUpperCase()}</span></h1>
                <div className='flex items-center gap-6 mr-8'>
                    <Dropdown title="Category" options={["now_playing", "popular", "top_rated", "upcoming"]} func={(e) => setcategory(e.target.value)} />
                </div>
            </div>

            <InfiniteScroll dataLength={movie.length} next={GetMovie} hasMore={hasMore} loader={<h1 className='bg-black text-white font-semibold text-2xl flex justify-center p-2'>Loading...</h1>}>
                <Cards data={movie} />
            </InfiniteScroll>
        </div>
    ) : (<Loading />)
}

export default Movies