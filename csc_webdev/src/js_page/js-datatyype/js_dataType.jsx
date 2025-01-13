import "./js_dataType.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";

function Js_dataType(){
    const [result,setResult] = useState("");
    const codeExample_js_type =[
        {
            id:1,
            title:"var",
            code: `
            var name = "Alice";     // Declare a variable
            name = "Bros"    // Update the variable
            var name = "Charlie"; // Re-declare the variable (allowed)

            if(true){
                var age = 25;
            }
            console.log(age) //Output: 25

            `
        },
        {
            id:2,
            title:"let",
            code: `
            let name = "Aki" // Declare a variable
            name = "Bob" //Update var
            //let name = "x" -> Error: Cannot re-declare

            if(true){
                let age = 25; // it only exists inside this block
                console.log(age); //out put = 25
            }

            //console.log(age); -> Error

            `
        }
        ,
        {
            id:3,
            title:"const",
            code: `
            const z = 10;
            z = 20 // Error: Can't reassign a constant variable
            if(true){
                const z = 20;
                console.log(z); //20
            }
            console.log(z); //10

            const numbers = [1,2,3];
            numbers.push(4); //allowed modifying the contents
            console.log(numbers); // [1,2,3,4]
            
            `
        }
    ]
    const codeEx_jsData1 = codeExample_js_type[0];
    const codeEx_jsData2 = codeExample_js_type[1];
    const codeEx_jsData3 = codeExample_js_type[2];

    return(
  

        <main>
        <h1 className="topic">Variables and Data Types</h1>
        <hr></hr>
        <br></br>
        <h2>Variables</h2>
        <br></br>
        <p>A variable in JavaScript is a container used to store data or information that can be referenced, manipulated, and reused throughout a program.</p>
        <br></br>
    
        <h3>1. var</h3>
        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">Var is the old ways of creating variables in Js (Hoisting)</li>
                <li className="explain-li">Meaning it is brought into the top of scope </li>
                <li className="explain-li">It is <b>Gobal</b>, available everywhere</li>
                <li className="explain-li">You can <b>re-declare</b> the same variable using var, which can sometimes cause bugs</li>
                
                
            </ul>
        </div>
        <div className="code_container">
        <div className="code_text">{codeEx_jsData1.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeEx_jsData1.code}
          </SyntaxHighlighter>
        </div>
      </div>

      <br></br>
        <h3>2. let</h3>
        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">let is the modern way to create var</li>
                <li className="explain-li">It respect the <b>Block space</b> meaning the var only exists inside in curly braces where you declare it </li>
                <li className="explain-li">You can update a var with let but you cannot re-declare in the same scope</li>
             
                
            </ul>
        </div>
        <div className="code_container">
        <div className="code_text">{codeEx_jsData2.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeEx_jsData2.code}
          </SyntaxHighlighter>
        </div>
      </div>
        <br></br>
      <h3>3. const</h3>
        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">It use to create <b>constant</b> variable, meaning <b>the value cannot be changed</b></li>
                <li className="explain-li">It must me  initialized immediately, you can't leave them undefined</li>
                <li className="explain-li">Use to declare a complex object like an array or object</li>
             
                
            </ul>
        </div>
        <div className="code_container">
        <div className="code_text">{codeEx_jsData3.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeEx_jsData3.code}
          </SyntaxHighlighter>
        </div>
      </div>
        <br></br>
        <hr></hr>
        <br></br>


        <p>These are some types of Data types</p>
        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><b>String</b>: represent text
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`let text = "Jungwon";`}
              </SyntaxHighlighter>
                </li>
                <li className="explain-li"><b>Number</b>: numeric values (int and decimals)
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`let x = 10.4;`}
              </SyntaxHighlighter>
                 </li>
                <li className="explain-li"><b>Boolean</b>: true or false
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`let isTrue = true;`}
              </SyntaxHighlighter>
                </li>
                <li className="explain-li"><b>Null</b>: an intential absence of a value
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`let empty = null;`}
              </SyntaxHighlighter>
                </li>
                <li className="explain-li"><b>Undefined</b>: value that has been declared but not assigned a value
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`let notDefined;`}
              </SyntaxHighlighter>
                </li>
                <li className="explain-li"><b>Object</b>: complex data structures with key-value pairs
                <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`let cat = {name:"Wonie",age:20};`}
              </SyntaxHighlighter>
                </li>
            </ul>
        </div>
        
        </main>
    );
}   
export default Js_dataType;