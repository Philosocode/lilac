import React from "react";

import cafeImage from "assets/cafe.jpg";

export const Card = () => (
  <div className="c-card__container">

    <div className="c-dark-image__container c-dark-image__container--half-height c-card__image-container">
      <img className="c-dark-image__image" src={cafeImage} alt="Cafe" />
    </div>

    <h3 className="c-heading c-card__heading">Awesome Feature</h3>
    <p className="c-card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, placeat, doloremque laborum doloribus eius ex nesciunt ratione quidem iste aliquid id</p>
  </div>
);