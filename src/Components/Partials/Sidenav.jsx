import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = ({ isOpen, onClose}) => {

    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (navRef.current && !navRef.current.contains(event.target)) {
            onClose();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [onClose]);


  return (
    <div ref={navRef} className={`fixed z-[100] flex flex-col text-white w-[12%] bg-[#121212] border-r border-zinc-600 h-screen p-6 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className='flex gap-3 mb-16'>
            <i className='ri-tv-fill'></i>
            <h1>Amazon Crime</h1>
        </div>

        <div className='flex flex-col gap-2'>
            <Link to="/trending" className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-fire-fill'></i>Trending
            </Link>
            <Link to="/popular" className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-bard-fill'></i>Popular
            </Link>
            <Link to="/movies" className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-movie-2-fill'></i>Movies
            </Link>
            <Link to="/tvshows" className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-tv-2-fill'></i>Tv Shows
            </Link>
            <Link to="/people" className='flex gap-2 hover:bg-black hover:text-green-400 rounded-md p-4 duration-300'>
                <i className='ri-team-fill'></i>People
            </Link>
        </div>
    </div>
  )
}

export default Sidenav