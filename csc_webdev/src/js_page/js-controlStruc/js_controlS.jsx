import "./js_controlS.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";

function Js_controlS(){
    const [Ifresult,setIfResult] = useState("");
    const [loopresult,setloopResult] = useState("");
    const codeExaple = [
        {
            id:1,
            title: "Conditional statements",
            code: `
            const score = 60;
            if(score >=50){
                console.log('You passed!!');
            }else{
                console.log('You failed!!');
            }

            console.log(score>=50 ?  "You passed!!" : "You failed ")

            `
        },
        {
            id:2,
            title: "Loops",
            code: `
            www
            `
        }
   

    ]

    const codeEx_ifelse = codeExaple[0];
    const codeEx_loop = codeExaple[1];

    const handleIfelseEx = () =>{
        const score =60;
        setIfResult(score >= 50 ? "You passed!!" : "You failed ");
    }
    const handleLoop = () =>{
        for(let i = 0 ; i<5 ;i++){
            setloopResult(i);
        }
    }
    const handelIfClear = () =>{
        setIfResult("");
    }
    return(
        <main>
        <h1 className="topic">Control Structure</h1>
        <hr></hr>
        <br></br>
        <p>It's about condition and loop</p>
        <br></br>
        <h3>1. If-Else</h3>
        <div className="code_container">
        <div className="code_text">{codeEx_ifelse.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeEx_ifelse.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="js_test_box">
        <div className="js_test_btn">
        <button className="js_result-btn" onClick={handleIfelseEx}>Click me</button>
        <button className="js_clear-btn" onClick={handelIfClear}>Clear</button>
        </div>
       
        <div className="js_result">
            <p>Result: {Ifresult}</p>
        </div>
      </div>
      
        
        </main>
    );
}   
export default Js_controlS;