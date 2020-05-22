import React, { Component } from 'react';
import SignaturePad from 'react-signature-canvas';

const CheckOther = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showResults);
  return (
    <div>
      <div onClick={onClick}>
        <b>
          Other <i className="icon fa-chevron-down"></i>
        </b>
      </div>
      {showResults ? <OtherAnswer /> : null}
    </div>
  );
};

const OtherAnswer = () => (
  <div id="results" className="other-answer">
    <br />
    <div className="mb-5">
      <input
        type="text"
        name="check-other-answer"
        id="check-other-answer"
        defaultValue=""
        placeholder="Explain"
      />
    </div>
  </div>
);

export default class Signatures extends Component {
  state = { trimmedDataURL: null };
  sigPad = {};

  clear = () => {
    this.sigPad.clear();
  };

  sign = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png'),
    });
  };

  render() {
    let { trimmedDataURL } = this.state;
    return (
      <div className="container">
        <form method="post" action="#">
          <div className="grid-wrapper">
            <div className="col-6">
              <div className="mb-5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  defaultValue=""
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  defaultValue=""
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="col-12">
              <div className="mb-5">
                <input
                  type="text"
                  name="address-street"
                  id="address-street"
                  defaultValue=""
                  placeholder="Street Address"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-5">
                <input
                  type="text"
                  name="address-city"
                  id="address-city"
                  defaultValue=""
                  placeholder="City"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-5">
                <input
                  type="text"
                  name="address-state"
                  id="address-state"
                  defaultValue=""
                  placeholder="State"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-5">
                <input
                  type="number"
                  name="address-zip"
                  id="address-zip"
                  defaultValue=""
                  placeholder="ZIP/Postal Code"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="select-wrapper mb-5">
                <select name="address-country" id="address-country">
                  <option defaultValue="United States">- Country -</option>
                  <option value="1">Other Countries</option>
                  <option value="2">United States</option>
                </select>
              </div>
            </div>

            <div className="col-6">
              <div className="mb-5">
                <input
                  type="email"
                  name="email1"
                  id="email1"
                  defaultValue=""
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-5">
                <input
                  type="email"
                  name="email2"
                  id="email2"
                  defaultValue=""
                  placeholder="Confirm E-mail"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-5">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  defaultValue=""
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="mb-5">
                <p>Best Way to Contact Me</p>
                <div className="col-3">
                  <input type="checkbox" name="check-email" id="check-email" />
                  <label htmlFor="check-email">E-mail</label>
                </div>
                <div className="col-3">
                  <input type="checkbox" name="check-call" id="check-call" />
                  <label htmlFor="check-call">Call</label>
                </div>
                <div className="col-3">
                  <input type="checkbox" name="check-text" id="check-text" />
                  <label htmlFor="check-text">Text</label>
                </div>
                <div className="col-3">
                  <CheckOther />
                </div>
              </div>
            </div>

            <div className="col-12 mb-5">
              <input type="checkbox" name="consent" id="consent" />
              <label htmlFor="consent">
                <b>I consent to receive communications from PSI Seminars:</b>May
                include phone, e-mail, or social media.
              </label>
            </div>

            <div className="col-12">
              <div className="select-wrapper mb-5">
                <select name="gender" id="gender">
                  <option defaultValue="">- Gender -</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Submit" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>

        <div className="sigContainer">
          <SignaturePad
            canvasProps={{ className: 'sigPad' }}
            penColor="green"
            ref={ref => {
              this.sigPad = ref;
            }}
          />
        </div>
        <div>
          <button className="button" onClick={this.clear}>
            Clear
          </button>
          <button className="button" onClick={this.sign}>
            Trim
          </button>
        </div>
        {trimmedDataURL ? (
          <img className="sigImage" src={trimmedDataURL} />
        ) : null}

        <form>
          <label for="signature">Sign Here</label>
          <input type="image" src={trimmedDataURL} />
        </form>
      </div>
    );
  }
}
