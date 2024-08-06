
const HorizontalCards = ({ data }) => {

  return (
        <div className='w-full flex overflow-auto text-white p-5'>
            {data.map((item,index) => (
                <div key={index} className='relative min-w-[16%] h-[35vh] mr-7'>
                    <div className='leading-4 transform -rotate-90 origin-top-left absolute bottom-0 left-3 font-semibold text-lg'>{item.title || item.name || item.original_name || item.original_title}</div>

                    <img className='absolute right-0 w-[80%] h-full rounded-lg' src={`https://image.tmdb.org/t/p/original${item.poster_path || item.backdrop_path}`} alt="" />
                </div>
            ))}
        </div>
  )
}

export default HorizontalCards