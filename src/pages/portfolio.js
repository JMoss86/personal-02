import React from 'react';

import Layout from '../components/Layout';

import portfolio1 from '../assets/images/portfolio-01.jpg';
import portfolio2 from '../assets/images/portfolio-02.jpg';
import portfolio3 from '../assets/images/portfolio-03.jpg';
import portfolio4 from '../assets/images/portfolio-04.jpg';

const IndexPage = () => (
  <Layout activeLink="portfolio">
    <section className="page-section">
      <a id="applejacks">
        <div className="container">
          <div className="product-item">
            <div className="product-item-description d-flex mx-auto">
              <div className="bg-faded p-5 rounded">
                <h2 className="text-center product-item-title mb-0">
                  Applejack's Ranch
                </h2>
                <p className="mb-0">
                  A starter site I built for a non-profit organization. They're
                  goal is to open this ranch in California sometime in the
                  future. The site was built to generate excitement and
                  inspiration in their team.
                </p>
              </div>
            </div>
            <a
              href="https://applejack.netlify.app/"
              target="_blank"
              rel="noopener"
              aria-label="Applejack's Ranch"
            >
              <img
                className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                src={portfolio1}
                alt=""
              />
            </a>
          </div>
        </div>
      </a>
    </section>

    <section className="page-section">
      <a id="covenantofgrace">
        <div className="container">
          <div className="product-item">
            <div className="product-item-description d-flex mx-auto">
              <div className="bg-faded p-5 rounded">
                <h2 className="text-center product-item-title mb-0">
                  Covenant of Grace
                </h2>
                <p className="mb-0">
                  The website of a local church I am acquainted with is woefully
                  out of date and uresponsive. For practice, I rebuilt it
                  entirely for them. The original site can be found{' '}
                  <a
                    href="https://covenantofgrace.org/"
                    target="_blank"
                    rel="noopener"
                    aria-label="Covenant of Grace dot Org"
                  >
                    here.
                  </a>
                </p>
              </div>
            </div>
            <a
              href="https://covenantofgrace.netlify.app"
              target="_blank"
              rel="noopener"
              aria-label="Covenant of Grace Rebuilt"
            >
              <img
                className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                src={portfolio2}
                alt=""
              />
            </a>
          </div>
        </div>
      </a>
    </section>

    <section className="page-section">
      <a id="first-moss">
        <div className="container">
          <div className="product-item">
            <div className="product-item-description d-flex mx-auto">
              <div className="bg-faded p-5 rounded">
                <h2 className="text-center product-item-title mb-0">
                  First Moss
                </h2>
                <p className="mb-0">
                  My very first attempt at advertising myself online. I was told
                  it reminded of a Jolly Rancher, which is valid feedback. At
                  the very least, it shows off how my work has evolved, and it
                  will always hold a special place in my heart. ^_^
                </p>
              </div>
            </div>
            <a
              href="https://first-moss.netlify.app/"
              target="_blank"
              rel="noopener"
              aria-label="First Moss"
            >
              <img
                className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                src={portfolio3}
                alt=""
              />
            </a>
          </div>
        </div>
      </a>
    </section>

    <section className="page-section">
      <a id="simplemoss">
        <div className="container">
          <div className="product-item">
            <div className="product-item-description d-flex mx-auto">
              <div className="bg-faded p-5 rounded">
                <h2 className="text-center product-item-title mb-0">
                  Simple Moss
                </h2>
                <p className="mb-0">
                  As part of an application to get into a particular coding boot
                  camp, I had to make a page using only HTML, CSS, and
                  JavaScript. I had high ambitions to recreate my First Moss
                  page, but due to limitations in time, I had to content myself
                  with something much simpler. My application was nevertheless
                  accepted.
                </p>
              </div>
            </div>
            <a
              href="https://simplemoss.netlify.app/"
              target="_blank"
              rel="noopener"
              aria-label="Simple Moss"
            >
              <img
                className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                src={portfolio4}
                alt=""
              />
            </a>
          </div>
        </div>
      </a>
    </section>
  </Layout>
);

export default IndexPage;
