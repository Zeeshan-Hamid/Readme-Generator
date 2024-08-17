import { useState } from "react";
import "./HomePage.scss";
import Form from "../../Components/Form/Form";
import SyntaxContainer from "../../Components/SyntaxContainer/SyntaxContainer";


const HomePage = () => {
  const [formData, setFormData] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(formData);

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
                style={{ width: "25px", marginRight: "8px" }}
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
        <Form setFormData={setFormData} setIsSubmitted={setIsSubmitted} />
      </section>

      <section id="section3" className="container">
        <h2>Form Data</h2>
        <SyntaxContainer isSubmitted={isSubmitted} formData={formData} />

        {/* Display LeetCode Username if available */}
        {formData["leetcode-user"] && (
          <div className="leetcode-display">
            <h3>Your LeetCode Username:</h3>
            <p>{JSON.stringify(formData)}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
