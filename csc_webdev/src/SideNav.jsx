import { useState } from "react";
import { RiArrowDropDownLine } from "@react-icons/all-files/ri/RiArrowDropDownLine";
import { Link } from "react-router-dom";
import "./SideNav.css";

function SideNav({ isOpen, toggleSideNav }) {
  const [isHtmlSubmenuOpen, setIsHtmlSubmenuOpen] = useState(false);
  const [isCSSSubmenuOpen, setIsCSSSubmenuOpen] = useState(false);
  const [isJsSubmenuOpen, setIsJssubmenuOpen] = useState(false);

  const toggleHtmlSubmenu = () => setIsHtmlSubmenuOpen(!isHtmlSubmenuOpen);
  const toggleCSSSubmenu = () => setIsCSSSubmenuOpen(!isCSSSubmenuOpen);
  const toggleJsSubmenu = () => setIsJssubmenuOpen(!isJsSubmenuOpen);

  const handleLinkClick = () => {
    toggleSideNav();
    window.scrollTo({top: 0}); // Scroll to the top
  };

  return (
    <div className={`sidenav ${isOpen ? "active" : ""}`}>
      <div className="homeMenu">
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
      </div>
      <hr></hr>
      <ul>
        <li className="topic-nav">
          <button onClick={toggleHtmlSubmenu} className="submenu-toggle">
            HTML <RiArrowDropDownLine className={`arrow-icon ${isHtmlSubmenuOpen ? "rotate" : ""}`} />
          </button>
          {isHtmlSubmenuOpen && (
            <ul className="submenu">
              <li className="sub">
                <Link to="/html" onClick={handleLinkClick}>
                  Introduction
                </Link>
              </li>
              <li className="sub">
                <Link to="/html/Ad" onClick={handleLinkClick}>
                  Attributes
                </Link>
              </li>
              <li className="sub">
                <Link to="/html/forms" onClick={handleLinkClick}>
                  Forms
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="topic-nav">
          <button onClick={toggleCSSSubmenu} className="submenu-toggle">
            CSS <RiArrowDropDownLine className={`arrow-icon ${isCSSSubmenuOpen ? "rotate" : ""}`} />
          </button>
          {isCSSSubmenuOpen && (
            <ul className="submenu">
              <li className="sub">
                <Link to="/css" onClick={handleLinkClick}>
                  Introduction
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/fournum" onClick={handleLinkClick}>
                  Basic box model
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/Position" onClick={handleLinkClick}>
                  Position
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/flex" onClick={handleLinkClick}>
                  Flex
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/display" onClick={handleLinkClick}>
                  Display
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/max-wid" onClick={handleLinkClick}>
                  Max-width
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/align" onClick={handleLinkClick}>
                  Align
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/grid" onClick={handleLinkClick}>
                  Grid
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/overflow" onClick={handleLinkClick}>
                  Overflow
                </Link>
              </li>
              <li className="sub">
                <Link to="/css/unit" onClick={handleLinkClick}>
                  Unit
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="topic-nav">
          <button onClick={toggleJsSubmenu} className="submenu-toggle">
            JAVASCRIPT <RiArrowDropDownLine className={`arrow-icon ${isJsSubmenuOpen ? "rotate" : ""}`} />
          </button>
          {isJsSubmenuOpen && (
            <ul className="submenu">
              <li className="sub">
                <Link to="/js" onClick={handleLinkClick}>
                  Introduction
                </Link>
              </li>
              <li className="sub">
                <Link to="/js/dataType" onClick={handleLinkClick}>
                  Data Types
                </Link>
              </li>
              <li className="sub">
                <Link to="/js/opera" onClick={handleLinkClick}>
                  Operators
                </Link>
              </li>
              <li className="sub">
                <Link to="/js/controlS" onClick={handleLinkClick}>
                  Control Structure
                </Link>
              </li>
              <li className="sub">
                <Link to="/js/function" onClick={handleLinkClick}>
                  Function
                </Link>
              </li>
              <li className="sub">
                <Link to="/js/array" onClick={handleLinkClick}>
                  Array
                </Link>
              </li>
              <li className="sub">
                <Link to="/js/object" onClick={handleLinkClick}>
                  Object
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
