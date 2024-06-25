import { NavLink } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Ramil
        </NavLink>

        <div className="d-flex flex-row align-items-center gap-5">
          <NavLink className="nav-link text-white" to="/">
            About me
          </NavLink>
          <NavLink className="nav-link text-white" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="nav-link text-white" to="/contacts">
            Contacts
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
