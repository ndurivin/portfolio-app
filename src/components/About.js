import React from "react";

const About = () => {
  return (
    <div className="container py-4">
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://i.pinimg.com/736x/91/36/2b/91362ba13b0b37fbc29110e173079e35.jpg"
          alt=""
          width="172"
          height="157"
        />
        <h1 className="display-5 fw-bold">About...</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Vinn is a passionate software engineer with great love for system
            design, design patterns and optimization techniques. I have been
            building applications that run on the web.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
