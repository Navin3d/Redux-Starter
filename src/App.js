import React, { Fragment } from "react";

import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import Counter from './components/Counter';


function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />
    </Fragment>
  );
}

export default App;
