import { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./HomePage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const HomePage = () => {
  const [formData, setFormData] = useState({});
  const [gridType, setGridType] = useState("");
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleSubmission = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("content", value); // Append the Quill editor content to the form data
    const input = Object.fromEntries(formData);
    setFormData(input);
    setIsSubmitted(true);
    
  };

  const handleGridChange = (e) => {
    setGridType(e.target.value);
  };

  return (
    <div className="home-page">
      <section className="header" id="section1">
        <h1 className="title">ReadMe Generator</h1>
        <div className="wrapper">
          <div className="left">
            <div className="greet">
              <span>Hi there</span>
              <img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                alt="Waving hand"
                style={{ width: "30px", marginRight: "8px" }}
              />
            </div>
            <div className="header-text">
              <h3>
                Welcome to the Coolest <span>Readme Generator</span> on
                Internet!
              </h3>
            </div>
            <a href="#">Lets Go!!</a>
          </div>
        </div>
      </section>
      <section id="section2" className="form">
        <form action="" method="post" onSubmit={handleSubmission}>
          <label htmlFor="title">Hi this is </label>
          <input type="text" name="title" id="" placeholder="Enter Title" />
          <input type="text" name="image" placeholder="Enter Image URL" />
          <div className="grid-selection">
            <label>
              <input
                type="radio"
                name="grid"
                value="1-grid"
                checked={gridType === "1-grid"}
                onChange={handleGridChange}
              />
              1-grid
            </label>
            <label>
              <input
                type="radio"
                name="grid"
                value="2-grid"
                checked={gridType === "2-grid"}
                onChange={handleGridChange}
              />
              2-grid
            </label>
          </div>
          {gridType === "1-grid" && (
            <div className="grid-1">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          )}
          {gridType === "2-grid" && (
            <div className="grid-2">This is the 2-grid content.</div>
          )}
          <button type="submit">Submit</button>
        </form>
      </section>
      <section id="section3" className="container">
        <h2>Form Data</h2>
        {isSubmitted && ( // Only show SyntaxHighlighter if form is submitted
          <SyntaxHighlighter language="jsx" style={dark}>
            {formData.title && formData.image && value
              ? `<p>Hi this is ${formData.title}</p>\n<img src="${formData.image}" alt="" />\n${value}`
              : formData.title
              ? `<p>Hi this is ${formData.title}</p>`
              : formData.image
              ? `<img src="${formData.image}" alt="" />`
              : value
              ? `${value}`
              : ""}
          </SyntaxHighlighter>
        )}
      </section>
    </div>
  );
};

export default HomePage;
