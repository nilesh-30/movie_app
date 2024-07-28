import React from 'react';
import Sidenav from './Partials/Sidenav';

const Home = () => {
    document.title = "Movie | Homepage"
  return (
    <div>
        <Sidenav />
    </div>
  )
}

export default Home