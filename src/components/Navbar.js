import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <center>
          <nav className="navbar navbar-expand-lg bg-info">
          <div className="container">
            <div className="container-fluid">
              {/* <Link classNameName="navbar-brand" to="/">
                <img
                  src="/docs/5.2/assets/brand/bootstrap-logo.svg"
                  alt=""
                  width="30"
                  height="24"
                  classNameName="d-inline-block align-text-top"
                />
                Vinn Nduri
              </Link> */}

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-center">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/works">
                      Works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/skills">
                      Skills
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contacts">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </nav>
        </center>
      </div>
    </div>
  );
};

export default Navbar;
