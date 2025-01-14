import "./css_unit.css";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeExample = [
    {
      id: 1,
      title: "CSS exmaple",
      code: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
                    body {
                        background-color: blue;
                    }

                    h1 {
                        color: white;
                        text-align:center;
                    }

                    p {
                        color: white;
                        font-family:verdana;
                        font-size:20px;
                        font-style:italic;
                    } 
        </style>

      </head>

      <body>
            <h1>Hello</h1>
            <p>bbbbbb</p>
      </body>

      </html>
      
      `,
    },
  ];

function Css_unit(){
    const codeCssintroEx1 = codeExample[0];
    return (
        <main>
            <h1 className="topic">Unit</h1>
            <hr></hr>
            <br></br>
            <p>A css unit use to determines the size of a property of elements.</p>
            <p>There are 2 types of units <b>Absolute</b> and <b>Relative</b></p>
        <br></br>
        <hr></hr>
        <br></br>
        <h2>Absolute</h2>
        <br></br>
        <p>Units are fixed. Not recommended for use on screen</p>
        <table>
          <tr className="table-header">
            <th>Unit</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>cm</td>
            <td>centimeters</td>
          </tr>
          <tr>
            <td>mm</td>
            <td>millimeters</td>
          </tr>
          <tr>
            <td>in</td>
            <td>inches (1in = 96px = 2.54cm)</td>
          </tr>
          <tr>
            <td>px *</td>
            <td>pixels (1px = 1/96th of 1in)</td>
          </tr>
          <tr>
            <td>pt</td>
            <td>points (1pt = 1/72 of 1 in)</td>
          </tr>
          <tr>
            <td>pc</td>
            <td>picas (1pt = 12pt)</td>
          </tr>
        </table>

        <br></br>
        <hr></hr>
        <br></br>
        <h2>Relative</h2>
        <br></br>
        <p>Relative length units specify a length relative to another value, such as the size of <b>parent elements, viewport or the font size</b></p>
        <table>
          <tr className="table-header">
            <th>Unit</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>
              em
            </td>
            <td>
              Relative to the font size of the <b>element's parent</b>
             <br></br>
             For example, if font size of parent is 16px  then 1 em = 16px (2em = 32px)
            </td>
          </tr>

          <tr>
            <td>
              rem
            </td>
            <td>
              Rem is from "Root em" which relative to the <b>font size of HTML's root</b> (often 16px)
              <br></br> It use for consistent sizing, as it doesn't depend on the element's parent
            </td>
          </tr>

          <tr>
            <td>
              %
            </td>
            <td>
              Relative to the size of parent elements but in %
            </td>
          </tr>

          <tr>
            <td>
              vh
            </td>
            <td>
              Relative to the viewport height <b>1vh</b> = <b>1%</b> of the viewport height
            </td>
          </tr>

          <tr>
            <td>
              vw
            </td>
            <td>
            Relative to the viewport width <b>1vw</b> = <b>1%</b> of the viewport width
              
            </td>
          </tr>

          <tr>
            <td>
              vmin/vmax
            </td>
            <td>
              Relative to the smaller (vmin) or larger (vmax) dimension of the viewport
            </td>
          </tr>
        </table>
         
        <br></br>
        <hr></hr>
        <br></br>
         <div className="unitEx">
          <h2>Example</h2>
          <div className="unit-sti">
            <img className="unit-sti1" src="https://i.pinimg.com/736x/f9/40/29/f94029be9362bc969709d54aa6eb20ac.jpg"/>
          </div> 
          <div className="explain-list">
            <ul className="explain-ul">
                <li className="explain-li">
                <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`parent:30px child:0.5em -> 15px`}</SyntaxHighlighter>
                <br></br>
                <div className="em-p-out">
                  Parent
                </div>
                <div className="em-p">
                  <div className="em-c">
                    Child
                  </div>
                </div>
                </li>
                <li className="explain-li">
                <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`HTML fontt size : 16px -> 2 rem = 32 px`}</SyntaxHighlighter>
                  <br></br>
                  <div className="e-32px">This is 32 px</div>
                  <div className="e-2rem">This is 2 rem</div>

                </li>

                <li className="explain-li">
                <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`font-size: 40% of container`}</SyntaxHighlighter>
                  <br></br>
                  <div className="e-100">This is 100% of container</div>
                  <div className="e-40">This is 40% of container</div>
                
                </li>

                <li className="explain-li">
                <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`font-size: 50vh`}</SyntaxHighlighter>
                  <br></br>
                  <div className="v-10">This is 10% of screen height</div>
                  
                </li>

                <li className="explain-li">
                <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`font-size:50vmin`}</SyntaxHighlighter> if viewport width if 800px and height is 600px then
                <b>50vmin</b> = 50% of 600px = <b>300px</b>
                 
                </li>

                <li className="explain-li">
                <SyntaxHighlighter style={smallCode_customStyle} className="code-explain-p">{`font-size:50vmax`}</SyntaxHighlighter> if viewport width if 800px and height is 600px then
                <b>50vamx</b> = 50% of 800px = <b>400px</b>
                 
                </li>
              
           </ul>
           
        </div> 
         </div>
        
        
        </main>
    )
}
export default Css_unit;