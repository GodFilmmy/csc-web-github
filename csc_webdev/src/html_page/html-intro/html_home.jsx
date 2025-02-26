import "./html_home.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {bigCode_customStyle, smallCode_customStyle }from "../../custom_import/ShowingCode_custom";


const codeExample = [
  {
    id: 1,
    title: "HTML Page Structure",
    code: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Page title</title>
      </head>
      <body>
        <h1>Example</h1>
        <p>paragraph</p>
      </body>
    </html>
    `,
  },
];

function HtmlHome() {
  const ex1 = codeExample[0];
  return (
    <main>
      <h1 className="topic">HTML INTRODUCTION</h1>
      <hr />
      <br />
      <p>
        <b>HyperText Markup Language</b>, or HTML, is a set of markup symbols or
        codes inserted into a file intended for display on the internet.
      </p>

      <div className="code_container">
        <div className="code_text">{ex1.title}</div>
        <div className="code_Section">
          <SyntaxHighlighter
            language="html"
            style={bigCode_customStyle}
            className="codeDemo"
          >
            {ex1.code}
          </SyntaxHighlighter>
        </div>
      </div>

      <div className="explain-list">
        <h3>Example Explained</h3>
        <br />
        <ul className="explain-ul">
          <li className="explain-li">
            <SyntaxHighlighter  className="code-explain-small">
              {`<!DOCTYPE html>`}
            </SyntaxHighlighter>{" "}
            declaration defines that this is an HTML5 document
          </li>
          <li className="explain-li">
            <SyntaxHighlighter  className="code-explain-small">
              {`<html>`}
            </SyntaxHighlighter>{" "}
            is the root elements for HTML page
          </li>
          <li className="explain-li">
            <SyntaxHighlighter  className="code-explain-small">
              {`<head>`}
            </SyntaxHighlighter>{" "}
            declaration defines that this is an HTML5 document
          </li>
          <li className="explain-li">
            <SyntaxHighlighter className="code-explain-small">
              {`<title>`}
            </SyntaxHighlighter>{" "}
            element specifies a title for the HTML page (which is shown in the
            browser's title bar or in the page's tab)
          </li>
          <li className="explain-li">
            <SyntaxHighlighter className="code-explain-small">
              {`<body>`}
            </SyntaxHighlighter>{" "}
            defines the document's body and it is a container for all visible
            contents
          </li>
          <li className="explain-li">
            <SyntaxHighlighter  className="code-explain-small">
              {`<h1>`}
            </SyntaxHighlighter>{" "}
            defines large heading
          </li>
          <li className="explain-li">
            <SyntaxHighlighter  className="code-explain-small">
              {`<p>`}
            </SyntaxHighlighter>{" "}
            defines a paragraph
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />

      <h2>WHAT IS AN HTML ELEMENT</h2>
      <br />
      <p>
        An HTML element is defined by a start tag, some content, and an end tag
      </p>
      <img
        width="85%"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20231211172217/Group-3-2.jpg"
        alt="HTML Element Example"
      ></img>

      <br />
      <hr />
      <br />
      <h2>Web Browsers</h2>
      <br />
      <p>
        The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read
        HTML documents and display them correctly. A browser does not display
        the HTML tags, but uses them to determine how to display the document.
      </p>
      <br />
      <img
        width="80%"
        src="https://www.w3schools.com/html/img_chrome.png"
        alt="Browser Example"
      ></img>
    </main>
  );
}

export default HtmlHome;
