import React from 'react';
import Layout from '../components/Layout';
import SignatureCanvas from 'react-signature-canvas';
import Signatures from '../components/Signatures';

const IndexPage = () => (
  <Layout activeLink="signature">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-lower">
                  A signature pad! Does it do anything else? Let's find out
                  together.
                </span>
              </h2>

              <SignatureCanvas
                canvasProps={{
                  width: 500,
                  height: 200,
                  className: 'sigCanvas',
                }}
              />

              <Signatures />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section></section>
  </Layout>
);

export default IndexPage;
