import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to="/">
            <i class="bi bi-house-door-fill mr-2"></i>Home
          </Link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Library
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
