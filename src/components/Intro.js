import React from 'react';

const Intro = () => {
  return (
    <div>
      <div className="container-fluid">
        <div
          id="about"
          className="
            container-fluid
            row
            header-intro
            justify-content-md-center
            m-5
          "
        >
        <div className="col col-md-5 mb-5">
          <h1 className="display-3">
            Hi, I'm a <span className="intro-color">full-stack developer in training.</span>
          </h1>
          <p className="lead">
            My name is Dana, I'm a software developer in training, based in the Hague, Netherlands.
          </p>
        </div>
        <div className="col col-md-5">
          <img src="dana.png" width="400" height = "400" alt="about me"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Intro