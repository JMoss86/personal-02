import React from 'react';
import EmailForm from '../components/EmailForm';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout activeLink="mail-list">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-lower">
                  Sign up for Updates From Me!
                </span>
              </h2>
              <div className="iframe-container">
                <span>
                  <EmailForm />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section></section>
  </Layout>
);

export default IndexPage;
