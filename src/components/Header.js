import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }

  handleMenuToggle = () => this.setState({ active: !this.state.active });

  handleLinkClick = () => this.state.active && this.handleMenuToggle();

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav,
    });

  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    const { activeLink } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-1" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
            href="/#"
          >
            {config.siteTitle}
          </a>

          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-center ml-auto">
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'home' ? 'active' : ''
                }`}
              >
                <Link className="nav-link text-uppercase text-expanded" to="/">
                  Home
                </Link>
              </li>

              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'resume' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/resume"
                >
                  Resume
                </Link>
              </li>

              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'portfolio' ? 'active' : ''
                }`}
              >
                <div
                  className={`group ${
                    this.state.activeSubNav === 'portfolio' ? 'active' : ''
                  }`}
                >
                  <div
                    className="nav-link text-uppercase text-expanded"
                    onClick={() => this.toggleSubNav('portfolio')}
                  >
                    Portfolio
                    <div className="groupLinks">
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink topLink"
                        to="/portfolio"
                      >
                        Portfolio Home
                      </Link>
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink notTopLink"
                        to="/portfolio#applejacks"
                      >
                        Applejack's *
                      </Link>
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink notTopLink"
                        to="/portfolio#covenantofgrace"
                      >
                        Covenant *
                      </Link>
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink notTopLink"
                        to="/portfolio#first-moss"
                      >
                        First Moss *
                      </Link>
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink notTopLink"
                        to="/portfolio#simplemoss"
                      >
                        Simple Moss *
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'contact' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>

              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'calendar' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/calendar"
                >
                  Calendar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
