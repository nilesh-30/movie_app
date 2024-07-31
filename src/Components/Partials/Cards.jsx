import React from 'react'

const Cards = ({ data }) => {
  return (
    <div className='text-white w-full p-5'>
        <h1 className='text-3xl font-semibold text-zinc-400 mb-5'>Trending</h1>

        <div className='w-full flex overflow-auto'>
            {data.map((item,index) => (
                <div key={index} className='relative min-w-[16%] h-[35vh] mr-7'>
                    <div className='leading-4 transform -rotate-90 origin-top-left absolute bottom-0 left-2 font-semibold text-lg'>{item.title || item.name || item.original_name || item.original_title}</div>

                    <img className='absolute right-0 w-[85%] h-full object-cover rounded-lg' src={`https://image.tmdb.org/t/p/original${item.backdrop_path || item.poster_path}`} alt="" />

                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards