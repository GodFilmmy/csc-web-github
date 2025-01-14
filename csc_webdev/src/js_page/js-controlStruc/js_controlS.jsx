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
            let ans = 0;
            for(let i = 0 ; i<5 ; i++){
                ans+=i;
            }

            let j = 0;
            while(j<5){
                ans+=j;
                j++;
            }
            
            let k = 0;
            do{
                ans+=k;
                k++
            }while(k<5)
            
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
        let ans = 0;
        for(let i = 0 ; i<5 ;i++){
            ans+=i;
        }
        setloopResult(ans);
    }
    const handelIfClear = () =>{
        setIfResult("");
    }
    
    const handleLoopClear = () =>{
        setloopResult("");
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
      <br></br>
      <hr></hr>
      <br></br>
      <h3>2. Loop</h3>
      <div className="code_container">
        <div className="code_text">{codeEx_loop.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeEx_loop.code}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="js_test_box">
        <div className="js_test_btn">
        <button className="js_result-btn" onClick={handleLoop}>Click me</button>
        <button className="js_clear-btn" onClick={handleLoopClear}>Clear</button>
        </div>
       
        <div className="js_result">
            <p>Result: {loopresult}</p>
        </div>
      </div>
        </main>
    );
}   
export default Js_controlS;