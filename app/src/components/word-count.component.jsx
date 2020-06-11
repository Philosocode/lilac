import React from "react";

export const WordCount = ({ count }) => (
  <div className="c-word-count__container">
    <div className="c-word-count__count">{count} words</div>
  </div>
);