import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav id="">
            <ul className="nav-links">
                <Link to='/'>
                <button className="home-btn">Home</button>
                </Link>
                <Link to='/Blog'>
                <button className="blog-btn">Blog</button>
                </Link>
                <Link to='/MyCat'>
                <button className="mycat.btn">My Cat</button>
                </Link>
            </ul>
        </nav>
  )
}

export default NavBar;