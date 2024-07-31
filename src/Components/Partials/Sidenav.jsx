import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className='flex flex-col text-white w-48 bg-[#121212] border-r border-zinc-600 h-screen p-6'>
        <div className='flex gap-3 mb-16'>
            <i className='ri-tv-fill'></i>
            <h1>Amazon Crime</h1>
        </div>

        <div className='flex flex-col gap-2'>
            <Link className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-fire-fill'></i>Trending
            </Link>
            <Link className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-bard-fill'></i>Popular
            </Link>
            <Link className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-movie-2-fill'></i>Movies
            </Link>
            <Link className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-tv-2-fill'></i>Tv Shows
            </Link>
            <Link className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-team-fill'></i>People
            </Link>
        </div>
    </div>
  )
}

export default Sidenav