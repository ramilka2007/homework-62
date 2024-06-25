import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Ramil</NavLink>

                <NavLink className="nav-link" to="/">About me</NavLink>
            </div>
        </nav>
    );
};

export default Toolbar;