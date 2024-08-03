import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "../../utils/axios";
import defaultImage from '../../assets/noimage.png'
import Sidenav from './Sidenav';

const Topnav = () => {

    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };

    const GetSearches = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        GetSearches();
    }, [query])

    return (
        <>
            <Sidenav isOpen={isSideNavOpen} onClose={closeSideNav} />
            <div className='text-white w-full h-[10vh] relative bg-[#121212] flex items-center justify-start gap-2 pl-5'>
                <i onClick={toggleSideNav} className="ri-menu-line pl-4 cursor-pointer"></i>
                <Link to="/" className='pl-20'>Amazon Crime</Link>

                <i className='ri-search-line pl-32'></i>
                <input onChange={(e) => setquery(e.target.value)} value={query} className='rounded-lg px-2 p-1 w-72 bg-transparent border-[1px]' type="text" placeholder='Search' />
                {query.length > 0 && (
                    <i onClick={() => setquery("")} className='ri-close-fill font-bold ml-[-2vw] cursor-pointer'></i>
                )}

                <button className='px-2 py-1 bg-green-400 text-black font-medium rounded-lg absolute right-6'>Log In</button>

                <div className='absolute ml-[20%] w-[40vw] max-h-[50vh] flex flex-col gap-2 bg-zinc-900 top-24 rounded-lg overflow-auto'>
                    {searches.map((items, index) => (
                        <Link key={index} className='flex gap-3 p-2 text-lg px-4'>
                            <img className='w-12 h-12 rounded-md object-cover' src={items.backdrop_path || items.profile_path ? `https://image.tmdb.org/t/p/original/${items.backdrop_path || items.profile_path}` : defaultImage} alt="" />
                            <span className='flex items-center justify-center'>{items.original_title || items.title || items.name || items.original_name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Topnav