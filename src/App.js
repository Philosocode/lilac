import React from 'react';
import { Switch, Route } from "react-router-dom";

import { LandingPage } from "pages/landing.page";
import { WritingPage } from "pages/writing.page";

function App() {
  return (
    <div className="o-site-container">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/write" component={WritingPage} />
      </Switch>
    </div>
  );
}

export default App;
