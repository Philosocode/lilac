import React from "react";

import { TypeWriter } from "./typewriter.component";
import heroImage from "assets/hero.jpg";
import { ScrollAnimator } from "./scroll-animator.component";

export const Hero = () => (
  <div className="c-hero__section">
    <div className="c-dark-image__container c-hero__image-container">
      <img className="c-dark-image__image" src={heroImage} alt="Hero" />
    </div>

    <div className="c-hero__text-container">
      <ScrollAnimator animationClassName="fadeIn">
        <TypeWriter 
          headingText="Lilac." 
          subheadingText="Proof of concept for a beautiful, minimalistic writing app." 
        />
      </ScrollAnimator>
    </div>
  </div>
)