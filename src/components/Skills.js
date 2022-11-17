import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="col-lg-6">
        <p style={{ fontSize: 35 }} className="display-4 lh-1">
          Hello,
        </p>
        <h5
          className="display-4 fw-bold lh-1 py-3"
          style={{ color: " #be4d25" }}
        >
          I'm Vinn
        </h5>
        <p className="lead py-3">
          <strong style={{ color: "#2596be" }}>Software Engineer </strong> |{" "}
          <strong style={{ color: " #be4d25" }}>UI/ UX Designer</strong> |{" "}
          <strong style={{ color: "#2596be" }}>
            Full-Stack Web Developer{" "}
          </strong>
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button
            type="button"
            className="btn btn-info btn-lg px-4 me-md-2 fw-bold"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
