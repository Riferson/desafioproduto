import React from "react";
import { BrowserRouter } from 'react-router-dom';
import {RoutesNav} from "./routes";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <>
    <BrowserRouter>
      <RoutesNav />
    </BrowserRouter>
    <GlobalStyle />
    </>
  );
}

export default App;
