import React from "react";

import { Nav } from "components/nav.component";
import { Hero } from "components/hero.component";
import { About } from "components/about.component";
import { Features } from "components/features.component";
import { CallToAction } from "components/call-to-action.component";

export const LandingPage = () => { 
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Features />
      <CallToAction />
    </div>
  )
 }