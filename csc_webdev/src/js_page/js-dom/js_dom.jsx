import "./js_dom.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";

const codeExample = [
    {
      id: 1,
      title: "HTML",
      code: `
        <div>
            <h1 id="title">Hello</h1>
            <p class="text">ahh</p>
            <p class="text">what the hell</p>
            <button class="btn">CLick me</button>
            <button class="btn">Another btn</button>
        </div>

      `,
    },
    {
        id: 2,
        title: "Js",
        code: `
          const title = document.querySelector('#title');
          console.log(title.textContent); // Output: Hello

          const firstP = document.querySelector('.text');
          console.log(firstP.textContent); //Output: "ahh" -> first itemin in class '.text'
          
          //Select all btn
          const buttons = document.querySelectorAll('.btn');
          buttons.forEach((button, index) => {
            console.log(button.textContext);
        `,
      },

]
function Js_dom(){
    const queryExDomHTML = codeExample[0];
    const queryExDomJs = codeExample[1];
    return(
        <main>
        <h1 className="topic">DOM manipulation</h1>
        <hr></hr>
        <br></br>
        <h2>What is DOM ?</h2>
        <br></br>
        <p><b>The Document Object Model (DOM)</b> is the structure of a web page represented as a tree. Each HTML elements is a <b>node</b> in the tree. Js use the DOM to access and modify web page dynamically</p>
        <div className="dom-pic-box">
            <img className="dom-pic" src="https://www.w3schools.com/whatis/img_htmltree.gif"/>
        </div>
        <hr></hr>
        <br></br>
        <div className="access-dom">
            <h2>Accessing Elements</h2>
            <br></br>
            <p>To manipulate DOM, you need to select the elements first</p>
            <br></br>
            <p>Common ways to select elements:</p>
            <br></br>
            <div className="dom-byid">
            <p><b>1. By id : </b>Use <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`getElementById`}</SyntaxHighlighter> to select specific element by id</p>
            <br></br>
            <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`const title = document.getElementById('title');
console.log(title) // Logs the <h1> element`}
                          </SyntaxHighlighter>
            </div>
            <br></br>


            <div className="dom-byclass">
            <p><b>2. By class : </b>Use <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`getElementsByClassName`}</SyntaxHighlighter> to select all elements with a specific class name, <b>**Elements**</b></p>
            <br></br>
            <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`const paragraphs = document.getElementsByClassName('text');
console.log(paragraphs[0]) // Logs the first <p></p> element`}
                          </SyntaxHighlighter>
            </div>

            <br></br>

            <div className="dom-bytag">
            <p><b>3. By Tag Name : </b>Use <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`getElementsByTagName`}</SyntaxHighlighter> to select all elements of specific type</p>
            <br></br>
            <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`const allHeaders = document.getElementsByTagName('h1');`}
                          </SyntaxHighlighter>
            </div>

            <br></br>                    
            <div className="dom-query">
            <p><b>4. By CSS Selector : </b>Use <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`querySelector`}</SyntaxHighlighter> for the first match or <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`querySelectorAll`}</SyntaxHighlighter> for all matches</p>
           <div className="code_container">
                   <div className="code_text">{queryExDomHTML.title}</div>
                   <div className="code_Section">
                     <SyntaxHighlighter
                       language="html"
                       style={bigCode_customStyle}
                       className="codeDemo"
                     >
                       {queryExDomHTML.code}
                     </SyntaxHighlighter>
                   </div>
                 </div>
                 <div className="code_container">
                   <div className="code_text">{queryExDomJs.title}</div>
                   <div className="code_Section">
                     <SyntaxHighlighter
                       language="html"
                       style={bigCode_customStyle}
                       className="codeDemo"
                     >
                       {queryExDomJs.code}
                     </SyntaxHighlighter>
                   </div>
                 </div>
                 <table>
          <tr className="table-header">
            <th>Selector</th>
            <th>Difference</th>
          </tr>
          <tr>
            <td>
              ('.button')
            </td>
            <td>
              target all the <b>class</b> named .button
            </td>
          </tr>

          <tr>
            <td>
              ('button')
            </td>
            <td>
              target all the <b>button</b> elements
            </td>
          </tr>

        </table>
         
            
            </div>

        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="modify-dom">
            <h2>Modifying Elements</h2>
            <br></br>
            <h3>1. Change Content</h3>
            <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><b>Text Content: </b><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`.textContent`}</SyntaxHighlighter> Change the text inside element 
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`const title = document.getElementById('title')
title.textContent = 'Hello, Jungwon'`}
                          </SyntaxHighlighter>

                </li>
                <li className="explain-li"><b>HTML content: </b><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`.innerHTML`}</SyntaxHighlighter> insert HTML (tags and text)
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`title.innerHTML = '<h2>Changed</h2>'`}
                          </SyntaxHighlighter>

                </li>
                <li className="explain-li"><b>Change Attributes: </b> <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`.setAttribute`}</SyntaxHighlighter> add or modify  attributes like src,href or alt
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`const like = document.querySelector('a');
link.setAttribute('href','https://bobo.com')
console.log(link.getAttribute('href')) // Logs 'https://bobo.com'`}
                          </SyntaxHighlighter>

                </li>
                <li className="explain-li"><b>Change Style: </b> <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`.style`}</SyntaxHighlighter>modify an element's style
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`const title = document.getElementById('title');
title.style.color='blue';
title.style.fontSize='2em';`}
                          </SyntaxHighlighter>

                </li>
              
           </ul>
        </div>
           <hr></hr>
           <br></br>
        </div>
        <div className="modify-dom">
            <h2>Adding and removing Elements</h2>
        
            <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><b>Create an Elements</b><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`.createElement`}</SyntaxHighlighter> to make new element
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`const newP = document.createElement('p');
newP.textContent = 'This is new';`}
                          </SyntaxHighlighter>

                </li>
                <li className="explain-li"><b>Append to the page: </b><SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`.appendChild`}</SyntaxHighlighter> add the new element to the DOM 
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`document.body.appendChild(newP);`}
                          </SyntaxHighlighter>

                </li>
                <li className="explain-li"><b>Remove ELement: </b> <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`.remove`}</SyntaxHighlighter> to delete element
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                            {`const title = document.getElementById('title');
title.remove();`}
                          </SyntaxHighlighter>

                </li>
                
           </ul>
        </div>
           
        </div>


        </main>
    );
}   
export default Js_dom;