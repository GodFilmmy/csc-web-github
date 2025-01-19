import "./js_array.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState } from "react";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";

const codeExample = [
    {
      id: 1,
      bigtitle: "push" ,
      title: "Push -> add to the end",
      code: `
        let arr = [1,2,3]
        arr.push(4); // [1,2,3,4]
      `,
    },
    {
        id: 2,
        bigtitle: "pop" ,
        title: "Pop -> remove the last elements",
        code: `
          let arr = [1,2,3]
          arr.pop(); // [1,2]
        `,
      },
      {
        id: 3,
        bigtitle: "unshift" ,
        title: "unshift -> Add elements to index 0 ",
        code: `
          let arr = [1,2,3]
          arr.unshift(0); // [0,1,2,3]
        `,
      },
      {
        id: 4,
        bigtitle: "shift" ,
        title: "shift -> Remove elements at index 0 ",
        code: `
          let arr = [1,2,3]
          arr.shift(0); // [2,3]
        `,
      },
      {
        id: 5,
        bigtitle: "indexOf" ,
        title: "indexOf -> find index of element ",
        code: `
          let arr = [1,2,3]
          arr.indexOf(2); // 1
        `,
      },
      {
        id: 6,
        bigtitle: "includes" ,
        title: "includes -> check if elements exists",
        code: `
          let arr = [1,2,3]
          arr.includes(2) // true
        `,
      },
      {
        id: 7,
        bigtitle: "forEach" ,
        title: "forEach -> Execute function for each elements",
        code: `
          const fruits = ["apple","grape","banana"];
          fruits.forEach((fruit,index)=>{
            console.log(fruit + "has index : " + index )
            })
            /* apple has  index : 0
               grape has index : 1
               banana has index : 2
            */
        `,
      },
      {
        id: 8,
        bigtitle: "map" ,
        title: "map -> transform elements into new array",
        code: `
          let arr = [1,2,3];
          let doubled = arr.map(num => num*2); //[2,4,6]

          const ex = ["a","b","c"];
          const exName = ex.map((name,index)=>{
                return "My name is " + name;
            });
            console.log(ExName);
            ['My name is a' , 'My name is b' , 'My name is c'];
        `,
      },
      {
        id: 8,
        bigtitle: "filter" ,
        title: "Filter elements into a new array",
        code: `
          let arr = [1,2,3,4];
          let even = arr.filter(num => num%2 ===0);
          //[2,4]
        `,
      },
      {
        id: 9,
        bigtitle: "reduce" ,
        title: "Accumulate value into single result",
        code: `
          let arr = [1,2,3];
          let sum = arr.reduce((total,num) => total+num,0) //6
        `,
      },
      {
        id: 10,
        bigtitle: "concat" ,
        title: "combine array",
        code: `
         let arr1 = [1,2,3];
         let arr2 = [4,5];
         let combined = arr1.concat(arr2); //[1,2,3,4,5]
        `,
      },
      {
        id: 11,
        bigtitle: "slice" ,
        title: "Extract portion",
        code: `
         let arr1 = [1,2,3,4];
         let slice = arr1.slice(1,3) // [2,3]
        `,
      },
      {
        id: 12,
        bigtitle: "sort" ,
        title: "sort elements",
        code: `
         let arr = [2,1,5];
         arr.sort(); // [1,2,5];
        `,
      },
      {
        id: 13,
        bigtitle: "reverse" ,
        title: "reverse array order",
        code: `
         let arr = [1,2,3];
         arr.reverse(); // [3,2,1]
        `,
      },
      {
        id: 14,
        bigtitle: "flat" ,
        title: "flatten nested array",
        code: `
         let arr = [1,[2,[3]]];
         arr.flat(2); [1,2,3] // flattens nested array up to 2 levels deep
        `,
      },
  ];


function Js_array(){
    const [result,setResult] = useState("");

   
    


    return(
        <main>
        <h1 className="topic">Array</h1>
        <hr></hr>
        <br></br>
        <p>An array is a special variable, which can hold more than one value, respectively</p>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`let fruits = ['apple' , 'banana' , 'cherry' ];`}
              </SyntaxHighlighter>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Array method</h2>
        <br></br>

        {codeExample.map((example)=>(
            <div key={example.id}>
        <h3>{example.id}. {example.bigtitle || example.title}</h3>
        <div className="code_container">
        <div className="code_text">{example.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {example.code}
          </SyntaxHighlighter>
        </div>
      </div>
            </div>
        ))}



       

        </main>
    );
}   
export default Js_array;