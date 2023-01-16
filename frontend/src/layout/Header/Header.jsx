// import styles from './Header.module.css';
// import {BsHouse, BsSpeedometer2 } from 'react-icons/bs';

import { NavLink } from "react-router-dom";


const Header = () => {



  return (
    <header className="header">

      <div className="px-3 py-2 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              Logo
            </NavLink>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <NavLink to="/" className="nav-link text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="dashboard" className="nav-link text-white">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="orders" className="nav-link text-white">
                  Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="products" className="nav-link text-white">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="customers" className="nav-link text-white">
                  Customers
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </div>
      </div>

    </header>
  );

};

export default Header;