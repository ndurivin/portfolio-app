import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <center>
          <nav className="navbar navbar-expand-lg bg-info fixed-top">
          <div className="container" style={{maxWidth: 1000}}>
            <div className="container-fluid">
              {/* <Link classNameName="navbar-brand" to="/">
                <img
                  src="https://www.myvinn.com/wp-content/uploads/2018/02/Folie1-1200x720.jpg"
                  alt=""
                  width="100"
                  height="84"
                  classNameName="d-inline-block align-text-top"
                />
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
                <div className="container">
                  <center>
                  <ul className="navbar-nav justify-content-center" style={{fontSize: 18}}>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/works">
                      Works
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/contacts">
                      Contacts
                    </a>
                  </li>
                </ul>
                  </center>
                </div>
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
