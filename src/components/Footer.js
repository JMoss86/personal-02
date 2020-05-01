import React from 'react';

export default function Footer() {
  return (
    <footer className="footer text-faded text-center py-3">
      <div className="container">
        <p className="m-0 small">
          Copyright &copy; Jonathan Moss 2020{' '}
          <a
            href="https://github.com/JMoss86"
            target="_blank"
            rel="noopener"
            aria-label="Github"
          >
            <i class="fab fa-github"></i>
          </a>{' '}
          <a
            href="https://www.linkedin.com/in/jonathan-moss-20aaa1162/"
            target="_blank"
            rel="noopener"
            aria-label="Linkedin"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}
