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


import Css_intro from "./css_page/css-intro/css_intro";
import Css_fournum from "./css_page/css-fournum/css_fournum";
import Css_position from "./css_page/css-position/css_position";
import Css_flex from "./css_page/css-flex/css_flex";
import Css_display from "./css_page/css-display/css_display";
import Css_maxW from "./css_page/css-maxW/css_maxW";
import Css_align from "./css_page/css-align/css_align";
import Css_grid from "./css_page/css-grid/css_grid";
import Css_overflow from "./css_page/css-overflow/css_overflow";
import Css_unit from "./css_page/css-unit/css_unit";

import Js_intro from "./js_page/js-intro/js_intro";
import Js_dataType from "./js_page/js-datatyype/js_dataType";
import Js_opera from "./js_page/js-opera/js_opera";
import Js_controlS from "./js_page/js-controlStruc/js_controlS";
import Js_function from "./js_page/js-function/js_function";

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
              <Route path="/css/fournum" element={<Css_fournum/>}/>
              <Route path="/css/Position" element={<Css_position/>}/>
              <Route path="/css/flex" element={<Css_flex/>}/>
              <Route path="/css/display" element={<Css_display/>}/>
              <Route path="/css/max-wid" element={<Css_maxW/>}/>
              <Route path="/css/align" element={<Css_align/>}/>
              <Route path="/css/grid" element={<Css_grid/>}/>
              <Route path="/css/overflow" element={<Css_overflow/>}/>
              <Route path="/css/unit" element={<Css_unit/>}/>
              
              <Route path="/js" element={<Js_intro/>}/>
              <Route path="/js/dataType" element={<Js_dataType/>}/>
              <Route path="/js/opera" element={<Js_opera/>}/>
              <Route path="/js/controlS" element={<Js_controlS/>}/>
              <Route path="/js/function" element={<Js_function/>}/>
            
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
