import "./js_event.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React from "react";
import { bigCode_customStyle, smallCode_customStyle } from "../../custom_import/ShowingCode_custom";
import { useState } from "react";
const codeExample = [
  {
    id: 1,
    title: "Javascript",
    code: `
    const btn = document.querySelector("button");
    button.addEventListener("click", () =>{
        alert("click!"); // event with the <button> element
      })
    `,
  },
];

function Js_event() {
    
    const eventListen1 = codeExample[0];
    
    const handelAlertBtn = () =>{
      alert("click!");
    }
    
    
    return (
        <main>
            <h1 className="topic">Event</h1>
            <hr />
            <br></br>
            <p>
                An event refers to an action that happens in the browser, such as a user clicking a button, hovering over elements, or typing in an input field.
            </p>
            <br />
            <h2>Common Types of Events</h2>
            <br />
            <h4>1. Mouse Events</h4>
            <div className="explain-list">
                <ul className="explain-ul">
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`click`}</SyntaxHighlighter> triggerd when element is clicked
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`dbclick`}</SyntaxHighlighter> triggerd when element is double-clicked
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`mouseover`}</SyntaxHighlighter> triggerd when mouse hover an element
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`mouseout`}</SyntaxHighlighter> triggerd when mouse leaves an element
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`mousedown / mouseup`}</SyntaxHighlighter> triggerd when mouse is pressed/released
                    </li>
                    
                </ul>
            </div>
            <br></br>
            <h4>2. KeyBoard Events</h4>
            <div className="explain-list">
                <ul className="explain-ul">
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`keydown`}</SyntaxHighlighter> triggerd when key is pressed down
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`keypress`}</SyntaxHighlighter> similar to keydown, but ignore non-character keys
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`keyup`}</SyntaxHighlighter> triggerd when key is released
                    </li>
                    
                </ul>
            </div>
            <br></br>


            <h4>3. Form Events</h4>
            <div className="explain-list">
                <ul className="explain-ul">
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`submit`}</SyntaxHighlighter> triggerd when a form is submitted
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`change`}</SyntaxHighlighter> triggerd when the value of an input element changes
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`focus`}</SyntaxHighlighter> triggerd when an element gains focus
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`blur`}</SyntaxHighlighter> triggerd when an element losses focus
                    </li>
                    
                </ul>
            </div>
            <br></br>
            <h4>4. Window Events</h4>
            <div className="explain-list">
                <ul className="explain-ul">
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`load`}</SyntaxHighlighter> triggerd when entire webpage is loaded
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`resize`}</SyntaxHighlighter> triggerd when window is resized
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`scroll`}</SyntaxHighlighter> triggerd when the user scroll page
                    </li> 
                </ul>
            </div>
            <br></br>
            <h4>5. Others</h4>
            <div className="explain-list">
                <ul className="explain-ul">
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`input`}</SyntaxHighlighter> triggerd when user type in a text field
                    </li>
                    <li className="explain-li">
                      <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`contextmenu`}</SyntaxHighlighter> triggerd when the right-click context menu is openend
                    </li>
                </ul>
            </div>
            <hr></hr>
            <br></br>
            <h2>Adding Event Listener</h2>
            <div className="code_container">
              <div className="code_text">{eventListen1.title}</div>
              <div className="code_Section">
                <SyntaxHighlighter
                  language="html"
                  style={bigCode_customStyle}
                  className="codeDemo"
                >
                  {eventListen1.code}
                </SyntaxHighlighter>
              </div>
      </div>

      <div className="eventListenBtn-box-alert">
        <button onClick={handelAlertBtn} className="btn-test-alert">Click me</button>
      </div>

      
            
        </main>
    );
}

export default Js_event;
