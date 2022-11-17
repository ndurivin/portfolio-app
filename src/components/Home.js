import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <div className="py-3">
      <main className="py-5">
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img
                src="https://www.threadscript.com/images/department/ezkdchppCfd56ZkPYcAPZNzKVuVMIWUV.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="800"
                height="600"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <p style={{ fontSize: 35 }} className="display-4 lh-1">
                Hello, I'm 
              </p>
              <h5
                className="display-4 fw-bold lh-1 py-3"
                style={{ color: " #be4d25" }}
              >
                Vinn
              </h5>
              <p className="lead py-3">
                <strong style={{ color: "#2596be" }}>Software Engineer </strong>{" "}
                | <strong style={{ color: " #be4d25" }}>UI/ UX Designer</strong>{" "}
                |{" "}
                <strong style={{ color: "#2596be" }}>
                  Full-Stack Web Developer{" "}
                </strong>
              </p>

              <p style={{ fontSize: 18 }}>
                I am an ardent tech enthusiast (Full-stack web developer & UI/
                UX Designer) with a bias towards Back-end Development. I always
                strive for excellence in delivering user-oriented satisfaction.
              </p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link
                  type="button"
                  class="btn btn-info btn-lg px-4 me-md-2"
                  to="/about"
                >
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <center>
        {" "}
        <hr style={{ width: 1200 }} />
      </center>
      <About />
    </div>
  );
};

export default Home;
