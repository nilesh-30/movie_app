import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Trending from './Components/Trending';
import Popular from './Components/Popular';
import Movies from './Components/Movies';
import TvShows from './Components/TvShows';
import People from './Components/People';

const App = () => {
  return (
    <div className='w-screen h-screen bg-black'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/people' element={<People />} />
      </Routes>
    </div>
  )
}

export default App