import "./js_object.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";
import { TbObjectScan } from "react-icons/tb";
const codeExample = [
    {
      id: 1,
      title: "javascript",
      code: `
        let person = {
            name: "Jay",
            age: 22,
            favoriteFood : "corn"
            greet: function(){
                console.log("Hello");
            }
        }
      `,
    },
    {
        id: 2,
        title: "javascript",
        code: `
          let person = new Object();
          peorson.name = 'Jay';
          person.age = 22;
          person.greet = function(){
            console.log("Hello");
          }
        `,
      },
      {
        id: 3,
        title: "javascript",
        code: `
          class Person{
            constructor(name,age){
                this.name = name;
                this.age = age;
            }
          }
          let person = new Person("Jay",22);

        `,
      },
      {
        id: 4,
        title: "javascript",
        code: `
          let person = {
            name: "Jake",
            age: 22,
            job: "idol"
          }

          for(let key in person){
            console.log(key,person[key]);
          }
        
          Output:
          name Jake
          age  22
          job  idol
        `,
      },
      {
        id: 5,
        title: "javascript",
        code: `
          let car = {
            brand: "Toyota",
            model: "Corolla",
            specs:{
                engine: "1.6L",
                fuel: "Petrol"
            }
          }
        console.log(car.specs.engine); // "1.8L"
        `,
      },
  ];

function Js_object(){
    const [result,setResult] = useState("");
    const objectLiteral = codeExample[0];
    const objectCreate = codeExample[1];
    const objectconst = codeExample[2];
    const objectforin = codeExample[3];
    const objectNested = codeExample[4];
    return(
        <main>
        <h1 className="topic">Object</h1>
        <hr></hr>
        <br></br>
        <p>An object in js is a collection of key-pair where</p>
        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><b>Keys</b> are string os symbol</li>
                <li className="explain-li"><b>Values</b>can be any data type</li>
              
           </ul>
        </div>
        <hr></hr>
        <br></br>
        <h3>How to create object ? </h3>
        <br></br>
        <h4>1. Using Object Literal</h4>

        <div className="code_container">
        <div className="code_text">{objectLiteral.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {objectLiteral.code}
          </SyntaxHighlighter>
        </div>
      </div>

      <h4>2. Create new object</h4>

        <div className="code_container">
        <div className="code_text">{objectCreate.title}</div>
        <div className="code_Section">
        <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
        >
            {objectCreate.code}
        </SyntaxHighlighter>
        </div>
        </div>

        <h4>3. Using class with constructor</h4>
        <div className="code_container">
        <div className="code_text">{objectconst.title}</div>
        <div className="code_Section">
        <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
        >
            {objectconst.code}
        </SyntaxHighlighter>
        </div>
        </div>

        <br></br>
        <hr></hr>
        <br></br>

        <h3>Accessing Object Properties</h3>
        <br></br>
        <h4>1. Dot notation</h4>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {`console.log(person.name); //Jay`} 
                    </SyntaxHighlighter>
        <br></br>
        <h4>2. Bracket Notation</h4>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {`console.log(person["name"]); //Jay`} 
                    </SyntaxHighlighter>
        <br></br>
        <hr></hr>
        <br></br>
        <h3>Adding or update properties</h3>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {`peorson.job = "singer"; //Add
person.age = 23 //update`} 
                    </SyntaxHighlighter>
        <br></br>
        <h3>Deleting properties</h3>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {` delete person.age;
 console.log(person)
 // {name:"Jay", greet: [Function]}                   `}
 
                    </SyntaxHighlighter>
        <hr></hr>
        <br></br>
        <h3>Iterating Over Properties</h3>
        <br></br>
        <h4>1. for..in loop</h4>
        <div className="code_container">
        <div className="code_text">{objectforin.title}</div>
        <div className="code_Section">
        <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
        >
            {objectforin.code}
        </SyntaxHighlighter>
        </div>
        </div>
        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><b>key</b> hold "name", "age" ,"job"</li>
                <li className="explain-li"><b>{`person[]`}</b> is use to acess the value of each properties</li>
              
           </ul>
        </div>
        <br></br>
        <h4>2. Object.keys()</h4>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {` let keys = Object.keys(person);
 console.log(keys)
 // ["name","age","job"]                   `}
 
                    </SyntaxHighlighter>
<br></br>
<h4>3. Object.value()</h4>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {` let values = Object.values(person);
 console.log(values)
 // ["Jake",22,"idol"]                   `}
 
                    </SyntaxHighlighter>
<br></br>
<h4>4. Object.entries()</h4>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {` let entries = Object.entries(person);
 console.log(entries)
 // [["name","Jake"],["age",22],["job","idol"]]                   `}
 
                    </SyntaxHighlighter>
<br></br>
<hr></hr>
<br></br>
<h3>Nasted Object</h3>
<br></br>
<p>Objects can obtain other objects as values</p>
<div className="code_container">
        <div className="code_text">{objectNested.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {objectNested.code}
          </SyntaxHighlighter>
        </div>
      </div>
    <br></br>
    <hr></hr>
    <br></br>
    <h3>Checking for a property</h3>
    <br></br>
    <h4>1. Using in Operator</h4>
    <br></br>
    <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {`console.log("name" in person) // true`} 
                    </SyntaxHighlighter>
                    <br></br>
                    <h4>2. Using hasOwnProperty()</h4>
    <br></br>
    <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                        {`console.log(person.hasOwnProperty("name")); // true`} 
                    </SyntaxHighlighter>
       <div className="obj_img">
       <img className="monkeystudyObj" src="https://i.pinimg.com/736x/d8/24/48/d824489653ac52a0fd0e0532e39fdf6e.jpg"/>
       </div>
     
       
       
       
       
       
        </main>
    );
}   
export default Js_object;