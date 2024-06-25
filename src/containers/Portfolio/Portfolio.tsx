import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h1>My portfolio:</h1>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <Link to="game" className={'btn btn-success'}>
          Play game
        </Link>
        <Link to="see-countries" className={'btn btn-success'}>
          See countries
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Portfolio;
