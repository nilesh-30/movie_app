import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "../../utils/axios";
import defaultImage from '../../assets/noimage.png'

const Topnav = () => {

    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);

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
    },[query])

  return (
    <div className='text-white w-full h-[10vh] bg-[#121212] flex items-center justify-start gap-2 pl-[20%]'>
            <i className='ri-search-line'></i>
            <input onChange={(e) => setquery(e.target.value)} value={query} className='rounded-lg px-2 bg-transparent border-[1px]' type="text" placeholder='Search'/>
            {query.length > 0 && (
                <i onClick={() => setquery("")} className='ri-close-fill font-bold'></i>
            )}

            <div className='absolute w-[40vw] max-h-[50vh] flex flex-col gap-2 bg-zinc-900 top-24 rounded-lg overflow-auto'>
                {searches.map((items,index) => (
                    <Link key={index} className='flex gap-3 p-2 text-lg px-4'>
                        <img className='w-12 h-12 rounded-md object-cover grayscale-0' src={items.backdrop_path || items.profile_path ? `https://image.tmdb.org/t/p/original/${items.backdrop_path || items.profile_path}` : defaultImage} alt="" />
                        <span className='flex items-center justify-center'>{items.original_title || items.title || items.name || items.original_name}</span>
                    </Link>

                ))}
            </div>
    </div>
  )
}

export default Topnav