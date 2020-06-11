import React from "react";
import { Link } from "react-router-dom";

import { Footer } from "./footer.component";
import { ScrollAnimator } from "./scroll-animator.component";

export const CallToAction = () => (
  <section className="c-cta__section">
      <div className="c-cta__content">
        <ScrollAnimator animationClassName="bounce">
          <div className="u-center">
            <h2 className="c-heading c-heading--section c-cta__heading">Get Started</h2>
            <div className="c-divider c-cta__divider"></div>
            <Link to="/write">
              <button className="c-cta__button">GO TO APP</button>
            </Link>
          </div>
        </ScrollAnimator>
      </div>
    <Footer />
  </section>
);