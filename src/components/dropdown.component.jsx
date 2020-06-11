import React from "react";
import { Link } from "react-router-dom";

export const Dropdown = () => (
  <div className="c-dropdown__container">
    <div className="c-dropdown__arrow"></div>

    <ul className="c-dropdown__list">
      <li className="c-dropdown__item">
        <Link className="c-dropdown__link" to="/">
          <span className="c-dropdown__text">Landing</span><span className="c-dropdown__text-arrow">&rarr;</span>
        </Link>
      </li>
      <li className="c-dropdown__item">
        <Link className="c-dropdown__link" to="/write">
          <span className="c-dropdown__text">App</span><span className="c-dropdown__text-arrow">&rarr;</span>
        </Link>
      </li>
    </ul>
  </div>
);