import React from "react";

import { ScrollAnimator } from "./scroll-animator.component";
import aboutImage from "assets/coffee.jpg";

export const About = () => (
  <div className="c-about__section">

    <div className="c-about__left-side">
      <ScrollAnimator animationClassName="moveInLeft">
        <div className="c-about__text-container">
          <h2 className="c-heading c-heading--section">About</h2>
          <div className="c-divider c-about__divider"></div>

          <div className="c-body-text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam accusamus porro similique qui eaque adipisci soluta perspiciatis omnis ab repudiandae, at officia exercitationem ullam voluptates? Nobis, voluptatum. Dolores, voluptas dolore!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam accusamus porro similique qui eaque adipisci soluta perspiciatis omnis ab repudiandae, at officia exercitationem ullam voluptates? Nobis, voluptatum. Dolores, voluptas dolore!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam accusamus porro similique qui eaque adipisci soluta perspiciatis omnis ab repudiandae, at officia exercitationem ullam voluptates? Nobis, voluptatum. Dolores, voluptas dolore!</p>
          </div>
        </div>
      </ScrollAnimator>
    </div>

    <div className="c-about__right-side">
      <ScrollAnimator animationClassName="fadeIn" customStyle={{ height: "100%" }}>
        <div className="c-dark-image__container">
          <img className="c-dark-image__image c-dark-image__image--block" src={aboutImage} alt="About" />
        </div>
      </ScrollAnimator>
    </div>
    
  </div>
)