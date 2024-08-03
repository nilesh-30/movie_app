import React, { useEffect, useState } from 'react';
import Topnav from './Partials/Topnav';
import Dropdown from './Partials/Dropdown';
import Loading from "../Components/Partials/Loading"
import Cards from './Partials/Cards';
import axios from '../utils/axios';

const Trending = () => {

    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}`);
            settrending(data.results);
        } catch (error) {
            console.error("Error",error);
        }
    }

    useEffect(() => {
        GetTrending();
    }, [category, duration])

    return trending.length > 0 ? (
        <div className='w-full h-full overflow-hidden overflow-y-auto'>
            <Topnav />
            <div className='flex items-center justify-between text-white'>
                <h1 className='font-medium text-2xl text-green-400 py-8 px-8'>Trending</h1>
                <div className='flex items-center gap-6 mr-8'>
                    <Dropdown title="Category" options={["movie", "tv", "all"]} func={(e) => setcategory(e.target.value)} />
                    <Dropdown title="Duration" options={["week", "day"]} func={(e) => setduration(e.target.value)} />
                </div>
            </div>
            <Cards data={trending} title={category}/>
        </div>
    ) : (<Loading />)
}

export default Trending