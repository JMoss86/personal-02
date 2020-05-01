import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/dragon-selfie.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section">
      <div className="container">
        <div className="intro-item">
          <div className="intro-item-title d-flex">
            <div className="bg-faded p-5 d-flex mx-auto rounded">
              <h2 className="section-heading mb-0 text-center">
                <span className="section-heading-lower">
                  Greetings and Salutations!
                </span>
                <hr />

                <p className="intro-item-description">
                  Are you looking for a junior developer? What luck! <b>I</b> am
                  a junior developer. My name is Jonathan Moss, and I would like
                  to work for you. Have a look around at what I've put together
                  here. Be sure to check out my resume and portfolio, and if you
                  like what you see, get in touch. Let's see what we can build
                  together.
                </p>
              </h2>
            </div>
          </div>
          <img
            className="intro-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={intro}
            alt=""
          />
          <div className="intro-item-description d-flex mr-auto"></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
