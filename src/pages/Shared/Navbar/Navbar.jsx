import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-customize mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Movie Plex
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink
            style={{textDecoration: 'none', color: 'white' ,backgroundColor: 'rgb(128, 162, 162)', borderRadius: '8px', padding: '5px'}}
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
            </li>
            
            <li className="nav-item">
            <NavLink
            style={{textDecoration: 'none', color: 'white' ,backgroundColor: 'rgb(128, 162, 162)', borderRadius: '8px', padding: '5px', marginLeft: '10px', marginRight: '10px'}}
              to="/english-show"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              English Show
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
            style={{textDecoration: 'none', color: 'white' ,backgroundColor: 'rgb(128, 162, 162)', borderRadius: '8px', padding: '5px'}}
              to="/hindi-show"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Hindi Show
            </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movies"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary text-white" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
