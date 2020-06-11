import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

export const ScrollAnimator = ({ animationClassName, children, customStyle }) => ( 
  <ScrollAnimation 
    animateIn={animationClassName} 
    duration={1} 
    style={customStyle}
    animateOnce
  >
    {children}
  </ScrollAnimation>
);