import { Link } from 'react-router-dom'

const Header = ({ data }) => {
    
  return (
    <div className='relative w-full h-[80vh] text-white flex flex-col justify-end p-10 bg-gradient-to-r from-black to-white'>
      <div style={{
            background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundSize: "cover"
        }}
            className='absolute w-[65%] h-[70vh] botton-0 right-0 top-[10vh]'>
      </div>
        
      <div className='z-30 flex flex-col'>
        <h1 className='w-[70%] text-5xl font-black text-white'>{data.name || data.title || data.original_name || data.original-title}</h1>
        <span className='mt-4'>
          <i className='text-green-400 ri-album-fill'></i>{" "}{data.media_type.toUpperCase()}
          <i className='text-green-400 ri-megaphone-fill ml-4'>{" "}</i>{data.release_date || "No Informatoin"}
        </span>
        <p className='w-[50%] mt-3 text-white'>{data.overview.slice(0.200)}..<Link className='text-green-400'>more</Link></p>
        <Link className='text-black font-semibold bg-green-400 px-3 py-2 w-[8vw] rounded-lg mt-3'>Watch Trailer</Link>
      </div>
    </div>
  )
}

export default Header