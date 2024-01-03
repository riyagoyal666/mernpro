



import React from 'react';

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-dark text-decoration-none lh-1">
            <strong>JUSTfoodie</strong>
          </a>
          <span className="text-muted">© 2022, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-dark" href="/">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-dark" href="/">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-dark" href="/">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}




