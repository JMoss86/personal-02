import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout activeLink="contact">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-lower">
                  Let's get in touch!
                </span>
              </h2>
              <form
                action={`https://formspree.io/maydrvej`}
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <label for="name">
                  <div>
                    Name
                    <br />
                    <input type="text" name="name" placeholder="" required />
                  </div>
                </label>
                <br />
                <label for="email">
                  <div>
                    E-mail
                    <br />
                    <input type="email" name="email" placeholder="" required />
                  </div>
                </label>
                <br />
                <label for="message">
                  <div>
                    Message
                    <br />
                    <textarea name="message" placeholder="" required></textarea>
                  </div>
                </label>
                <div>
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
