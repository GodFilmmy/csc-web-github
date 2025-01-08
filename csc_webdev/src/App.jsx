import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";
import HtmlHome from "./html_page/html-intro/html_home";
import SideNav from "./SideNav";
import Hamburger from "hamburger-react";
import HtmlAd from "./html_page/html-ad/html_ad";
import NextBtn from "./next-btn";
import Css_position from "./css_page/css-position/css_position";
import Css_intro from "./css_page/css-intro/css_intro";
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
              <Route path="/" element={<HomeContent />} />
              <Route path="/html" element={<HtmlHome />} />
              <Route path="/html/Ad" element={<HtmlAd />} />
              <Route path="/css" element={<Css_intro/>}/>
              <Route path="/css/Position" element={<Css_position/>}/>
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
