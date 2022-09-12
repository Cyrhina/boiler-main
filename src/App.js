import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./store/StoreContext";
import Header from "./components/pages/header/header";
import { devNavUrl } from "./components/helpers/functions-general";
import Footer from "./components/pages/footer/footer";

function App() {
  return (
    <div>
      <StoreProvider>
        <Router>
          <Routes>
            <Route exact path={`${devNavUrl}/header`} element={<Header />} />
            <Route exact path={`${devNavUrl}/header`} element={<Footer />} />
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
