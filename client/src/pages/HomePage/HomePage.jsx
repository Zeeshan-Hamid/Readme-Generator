import { useState } from "react";
import "./HomePage.scss";
import Form from "../../Components/Form/Form";
import SyntaxContainer from "../../Components/SyntaxContainer/SyntaxContainer";
import IconSelector from "../../Components/FormIcons/IconSelector";

const HomePage = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(formData);

  const stars = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="home-page">
      <section className="header" id="section1">
        <div className="night">
          {stars.map((_, index) => (
            <div key={index} className="shooting_star"></div>
          ))}
        </div>
        <div className="wrapper">
          <h1>ReadMe Generator</h1>
          <div className="flex-wrapper">
            <div className="left">
              <div className="greet">Hi there!</div>
              <h3>Welcome to the Coolest Readme Generator on the Internet</h3>
            </div>
            <div className="right">
              <img src="/bg-3.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="section2" className="form">
        <Form
          setFormData={setFormData}
          setIsSubmitted={setIsSubmitted}
          formData={formData}
        />
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
