import React from "react";
import { BrowserRouter } from 'react-router-dom';
import {RoutesNav} from "./routes";
function App() {
  return (
    <BrowserRouter>
      <RoutesNav/>
    </BrowserRouter>
  );
}

export default App;
