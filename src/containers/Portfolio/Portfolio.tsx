import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1>My portfolio:</h1>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <Link to="game" className="btn btn-success">
          Play game
        </Link>
        <Link to="make-burger" className="btn btn-success">
          Burger maker
        </Link>
        <Link to="usernames" className="btn btn-success">
          Usernames
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Portfolio;
