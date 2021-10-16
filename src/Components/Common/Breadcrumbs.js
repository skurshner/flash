import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ tier, parentPage, parentURL, currentPage }) => {
  // Returns either 2 or 3 tiers
  if (tier === 2) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bi bi-house-door-fill mr-2"></i>Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currentPage}
          </li>
        </ol>
      </nav>
    );
  }
  if (tier === 3) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bi bi-house-door-fill mr-2"></i>Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={parentURL}>{parentPage}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {currentPage}
          </li>
        </ol>
      </nav>
    );
  }
};

export default Breadcrumbs;
