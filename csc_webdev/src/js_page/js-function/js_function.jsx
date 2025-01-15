import "./js_function.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";

function Js_function(){
    
    const [fun1Result,setfun1Result] = useState("");
    const [jsTestInput, setJsInput] = useState("");
    const codeExample = [
        {
          id: 1,
          title: "Function declarations",
          code: `
          function greet(name){
            console.log(\`Hello,\${name}\`);
          }
          
          greet(Jungwon);
          
          `,
        },
        {
            id: 2,
            title: "Return",
            code: `
            function add(a,b){
                return a+b;
            }
            let sum = add(10,20);
            console.log(sum)
            
            `,
          },
          {
            id: 3,
            title: "Basic Syntax",
            code: `
            const functionName = (parameter1,parameter2) => {
                return something;
            }
            `,
          },
          {
            id: 4,
            title: "Basic Example",
            code: `
            const power = (x) =>{
                return x**2;
            }
            console.log(power(4)) // 16
            
            **or short form
            const power = x => x*x;

            `,
          },
          {
            id: 5,
            title: "Lexical this",
            code: `
            function Person(name){
                this.name = name;
                this.sayHello = () =>{
                    console.log(\`Hello, \${this.name}\`)    
                }
            }
            const Sunoo = new Person("Sunoo");
            Sunoo.sayHello(); //Out put : Hello, Sunoo
            
            `,
          },
      ];

      const basicFunEx = codeExample[0];
      const basicFunEx2 = codeExample[1];
      const basicFunArrow1 = codeExample[2];
      const basicFunArrow2 = codeExample[3];
      const basicFunArrow3 = codeExample[4];
      const handleFun1 = () =>{
       setfun1Result(`Hello, ${jsTestInput}`);
      }

      const handleFun1Clear = () =>{
        setfun1Result("");
        setJsInput("");
      }

      
    return(
        <main>
        <h1 className="topic">Function</h1>
        <hr></hr>
        <br></br>
        <p>A block to perform a particular task</p>
        <br></br>
        <h3>1. Basic fuction structure</h3>
        <div className="code_container">
        <div className="code_text">{basicFunEx.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {basicFunEx.code}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="js_test_box">
        <div className="js_test_input">
            Input:
            <input className="js_test_input_box" type="text" placeholder="Input here to test the code"
            value={jsTestInput} onChange={(e) => setJsInput(e.target.value)}
            />
        </div>
        <div className="js_test_btn">
        <button className="js_result-btn" onClick={handleFun1}>Click me</button>
        <button className="js_clear-btn" onClick={handleFun1Clear}>Clear</button>
        </div>
       
        <div className="js_result">
            <p>Result: {fun1Result}</p>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>

      <h3>2. Return Value</h3>
      <br></br>
      <p>Use to sends a value back to the code</p>
      <div className="code_container">
        <div className="code_text">{basicFunEx2.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {basicFunEx2.code}
          </SyntaxHighlighter>
        </div>
      </div> 
      
      <hr></hr>
      <br></br>
      <h3>3. Arrow function</h3>
      <br></br>
      <p>Allows us to write shorter function syntax</p> 
        <div className="code_container">
        <div className="code_text">{basicFunArrow1.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {basicFunArrow1.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="code_container">
        <div className="code_text">{basicFunArrow2.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {basicFunArrow2.code}
          </SyntaxHighlighter>
        </div>
      </div> 
      <div className="code_container">
        <div className="code_text">{basicFunArrow3.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {basicFunArrow3.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="fun-jung-box">
        <img src="https://i.pinimg.com/736x/0b/b1/8d/0bb18dc9ba226caebb2f0dd0eb0c4732.jpg" className="func-jungpic"/>

      </div>
   
    </main>
    );
}   
export default Js_function;