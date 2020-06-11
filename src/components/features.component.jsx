import React from "react";

import { Card } from "components/card.component";
import { ScrollAnimator } from "components/scroll-animator.component";
import { TriangleClip } from "./triangle-clip.component";

export const Features = () => (
  <section className="c-features__section">
    <div className="c-features__content">
      <ScrollAnimator animationClassName="moveInBottom">
        <h2 className="c-heading c-heading--section">Features</h2>
        <div className="c-divider c-features__divider"></div>

        <div className="c-card__list">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </ScrollAnimator>
    </div>

    <TriangleClip />
  </section>
)