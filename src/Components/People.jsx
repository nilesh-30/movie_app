import { useEffect, useState } from 'react';
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import Loading from "../Components/Partials/Loading"
import Cards from './Partials/Cards';
import axios from '../utils/axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
    document.title = "Movie | People"
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const GetPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);

            if (data.results.length > 0) {
                setperson((prevState) => [...prevState, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error",error);
        }
    }

    const refreshhandler = () => {
        if(person.length === 0) {
            GetPerson()
        } else {
            setpage(1);
            setperson([]);
            GetPerson();
        }
    }

    useEffect(() => {
        refreshhandler();
    }, [category])

    return person.length > 0 ? (
        <div className='w-full h-full'>
            <Topnav />
            <div className='flex items-center justify-between text-white pt-16'>
                <h1 className='font-medium text-2xl text-green-400 py-8 px-8'>Peoples</h1>
            </div>

            <InfiniteScroll dataLength={person.length} next={GetPerson} hasMore={hasMore} loader={<h1 className='bg-black text-white font-semibold text-2xl flex justify-center p-2'>Loading...</h1>}>
                <Cards data={person} />
            </InfiniteScroll>
        </div>
    ) : (<Loading />)
}

export default People