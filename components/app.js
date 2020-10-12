import React from "react";

import Header from "./header";
import Menu from "./menu";

const App = (props) => (
  <>
    <Header />
    <Menu currentPage={props.currentPage} />
  </>
);

export default App;
