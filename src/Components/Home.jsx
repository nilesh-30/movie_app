import React from 'react';
import Sidenav from './Partials/Sidenav';
import Topnav from './Partials/Topnav';

const Home = () => {
    document.title = "Movie | Homepage"

  return (
    <div className='flex'>
        <Sidenav />
        <Topnav />
    </div>
  )
}

export default Home