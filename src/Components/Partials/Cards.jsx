import { Link } from 'react-router-dom';

const Cards = ({ data }) => {
  return (
    <div className='flex flex-wrap items-center justify-center bg-black'>
      {data.map((item, index) => (
        <Link className='w-[14vw] mb-[5%] mx-[2.5%]' key={index}>
          <img className='h-[40vh] object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original/${item.poster_path || item.profile_path || item.backdrop_path}`} alt="Cards" />

          <h1 className='font-semibold mt-3 text-white'>{item.name || item.title || item.original_name || item.original_title}</h1>
        </Link>
      ))}
    </div>
  )
}

export default Cards