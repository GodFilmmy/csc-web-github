import { useState } from "react";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { Link } from "react-router-dom";
import { FaCat } from "@react-icons/all-files/fa/FaCat";

import "./SideNav.css";

function SideNav({ isOpen, toggleSideNav }) {
  const [isHtmlSubmenuOpen, setIsHtmlSubmenuOpen] = useState(false);
  const [isCSSSubmenuOpen, setIsCSSSubmenuOpen] = useState(false);
  const [isJsSubmenuOpen, setIsJssubmenuOpen] = useState(false);

  const toggleHtmlSubmenu = () => {
    setIsHtmlSubmenuOpen(!isHtmlSubmenuOpen);
  };
  const toggleCSSSubmenu = () =>{
    setIsCSSSubmenuOpen(!isCSSSubmenuOpen);
  }
  const toggleJsSubmenu = () => {
    setIsJssubmenuOpen(!isJsSubmenuOpen);
  }

  return (
    <div className={`sidenav ${isOpen ? "active" : ""}`}>
      <div className="homeMenu">
    
        
        <Link to="/" onClick={toggleSideNav}>
        Home
        </Link>
      </div>
      <hr></hr>
      <ul>
        <li className="topic-nav">
          <button onClick={toggleHtmlSubmenu} className="submenu-toggle">
            HTML <RiArrowDropDownLine className={`arrow-icon ${isHtmlSubmenuOpen ? "rotate" : ""}`}/>
          </button>
          {isHtmlSubmenuOpen && (
            <ul className="submenu">
              <li className="sub">
                <Link to="/html" onClick={toggleSideNav} >
                  Introduction
                </Link>
              </li>
              <li className="sub">
                <Link to="/html/Ad" onClick={toggleSideNav}>
                Attributes
                </Link>
              </li>
              <li className="sub">
                <Link to="/html/forms" onClick={toggleSideNav}>
                  Forms
                </Link>
              </li>
            </ul>
          )}
        </li>


        <li className="topic-nav">
          <button onClick={toggleCSSSubmenu} className="submenu-toggle">
            CSS <RiArrowDropDownLine className={`arrow-icon ${isCSSSubmenuOpen ? "rotate" : ""}`}/>
          </button>
          {isCSSSubmenuOpen && (
            <ul className="submenu">
              <li className="sub">
                <Link to="/css" onClick={toggleSideNav}>
                  Introduction
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/fournum" onClick={toggleSideNav}>
                  Basic box model
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/Position" onClick={toggleSideNav}>
                  Position
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/flex" onClick={toggleSideNav}>
                  Flex
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/display" onClick={toggleSideNav}>
                  Display
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/max-wid" onClick={toggleSideNav}>
                  Max-width
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/align" onClick={toggleSideNav}>
                  Align
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/grid" onClick={toggleSideNav}>
                  Grid
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/overflow" onClick={toggleSideNav}>
                  Overflow
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="topic-nav">
          <button  onClick={toggleJsSubmenu} className="submenu-toggle">
            JAVASCRIPT <RiArrowDropDownLine className={`arrow-icon ${isJsSubmenuOpen ? "rotate" : ""}`}/>
          </button>
          {isJsSubmenuOpen && (
            <ul className="submenu">
              <li className="sub">
                <Link to="/html" onClick={toggleSideNav}>
                  Introduction
                </Link>
              </li>
              <li className="sub">
                <Link to="/html/tags" onClick={toggleSideNav}>
                  Tags
                </Link>
              </li>
              <li className="sub">
                <Link to="/html/forms" onClick={toggleSideNav}>
                  Forms
                </Link>
              </li>
            </ul>
          )}
        </li>

      </ul>
    </div>
  );
}

export default SideNav;
