import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideNav from "./SideNav";
import Hamburger from "hamburger-react";
import NextBtn from "./next-btn";

import appRoutes from "./app_routes";

import "./App.css";

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <Router>
      <div className="app-container">
        
        <Header />
        
        <div className="main-layout">
          
          <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
  
          <div className="content">
          <NextBtn></NextBtn>
          

            <div className="hamburger" onClick={toggleSideNav}>
              <Hamburger toggled={isSideNavOpen} toggle={setIsSideNavOpen} />
            </div>
  
            
            {isSideNavOpen && <div className="overlay" onClick={closeSideNav}></div>}
            <Routes>
            {appRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
            <br></br>
            <br></br>
            <NextBtn></NextBtn>
          </div>
        </div>
  
      
        <Footer />
      </div>
    </Router>
  );
  
}

export default App;
