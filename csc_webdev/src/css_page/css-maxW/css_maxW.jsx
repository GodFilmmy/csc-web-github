import "./css_maxW.css";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeExample = [
    {
      id: 1,
      title: "Max-width% -> HTML",
      code: `
        .container {
            width: 80%;
        }
      `,
    },
    {
      id: 2,
      title: "Max-width% -> CSS",
      code: `
        .item {
            min-width: 50%;
        }
      `,
    },
    {
      id: 3,
      title: "Min-width% -> HTML",
      code: `
        .item {
            max-width: 50%;
        }
      `,
    },
    {
      id: 4,
      title: "Min-width% -> CSS",
      code: `
        .container {
            min-width: 50%;
        }

        .item {
            max-width: 70%;
        }
      `,
    },
  ];

function Css_maxW(){
    const codeCssMaxEx1_html = codeExample[0];
    const codeCssMaxEx1_css = codeExample[1];
    const codeCssMinEx1_html = codeExample[2];
    const codeCssMinEx1_css = codeExample[3];
    return (
        <main>
            <h1 className="topic">Max and min width</h1>
            <hr></hr>
            <br></br>
            <p>They use to set the max and min properties in width of an elements to ensure that they does not exceed below certain values</p>
            <br></br>
            <hr></hr>
            <br></br>
            <h2>Max-width</h2>
            <br></br>
            <p>Sets the maximum width that an element can occupy.</p>       
            <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">If the content or parent element's width is smaller than the specified <b>max-width</b> the elements <b>shrinks accordingly</b></li>
                <li className="explain-li">Or if they are larger, it element <b>will not exceed</b> the defined value</li>
              
           </ul>
           
        </div> 
        <hr></hr>
        <br></br>
        <h3 className="be-af">Unit: px</h3>
        <br></br>

        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`max-width: 400px; `}
              </SyntaxHighlighter>
              
            <br></br>
           <div className="max-wid-ex1-box">
              I am  only a box haahahahaaaahahaahahaaa
           </div>
           <br></br>
          <p>The max-width 400px ensure that the box will never wider than 400px </p>
    <br></br>
<hr></hr>
<br></br>
    <h3 className="be-af">Unit: % </h3>
    <div className="code_container">
        <div className="code_text">{codeCssMaxEx1_html.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeCssMaxEx1_html.code}
          </SyntaxHighlighter>
        </div>
      </div> 

      <div className="code_container">
        <div className="code_text">{codeCssMaxEx1_css.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeCssMaxEx1_css.code}
          </SyntaxHighlighter>
        </div>
      </div> 
            <br></br>
        <div className="max-wid-ex2-con">
            
              <img className="max-wid-ex2-item" src="https://www.theepochtimes.com/_next/image?url=https%3A%2F%2Fimg.theepochtimes.com%2Fassets%2Fuploads%2F2022%2F09%2F02%2Fphotographer-Dmitry-Kohk-700x420.jpg&w=1200&q=75"/>
            
        </div>

        <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li"><b>Container (parent) </b> takes 80% of the window screen</li>
                <li className="explain-li"><b>Item (child)</b> max-width is 50% of the container width which means <b>it won't exceed half of the parent container's width</b></li>
              
           </ul>
           
        </div> 
<hr></hr>
<br></br>
<h2>Min-width</h2>
            <br></br>
            <p>Sets the minimun width that an elements can occupy</p>       
            <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">If the content or parent element's width is smaller than the specified <b>min-width</b> the elements <b>won't shrinks below the defined value</b></li>
                <li className="explain-li">Or if they are larger, it element <b>grow accordingly</b></li>
              
           </ul>
           
        </div> 
        <hr></hr>
        <br></br>
        <h3 className="be-af">Unit: px</h3>
        <br></br>
        <SyntaxHighlighter language="CSS" style={nord} className="codeDemo1">
                {`min-width: 500px; `}
              </SyntaxHighlighter>
          <br></br>
          <div className="min-wid-ex1-box">
              Min-width muhahaaahaahaahahaha
           </div>
           <br></br>
           <p>The min-width 400px ensure that the box will never less than 500px </p>
        <br></br>
        <hr></hr>
        <br></br>
        <h3 className="be-af">Unit: %</h3>

      <div className="code_container">
        <div className="code_text">{codeCssMinEx1_css.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {codeCssMinEx1_css.code}
          </SyntaxHighlighter>
        </div>
      </div>
<div className="min-wid-ex2-box">
  <img className="min-wid-ex2-item" src="https://i.pinimg.com/736x/29/7c/a9/297ca968b359e5898fca02ff42ef81e5.jpg"/>

</div>


<div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">The container's <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`min-width: 50%; `}</SyntaxHighlighter>ensures it is always at least half the screen's width. </li>
                <li className="explain-li">The item's <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`max-width: 70%;`}</SyntaxHighlighter> of the container ensures it never grows wider than 70% of the container.</li>
              
           </ul>
           
        </div>


        </main>
    )
}
export default Css_maxW;