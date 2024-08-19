import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./HomePage.scss";
import Form from "../../Components/Form/Form";
import SyntaxContainer from "../../Components/SyntaxContainer/SyntaxContainer";

const HomePage = () => {
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });

  const stars = Array.from({ length: 20 }, (_, i) => i);

  const handleScroll = () => {
    const section2 = document.getElementById("section2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-page">
      <animated.section style={fadeInProps} className="header" id="section1">
        <div className="night">
          {stars.map((_, index) => (
            <div key={index} className="shooting_star"></div>
          ))}
        </div>

        <div className="wrapper">
          <div className="flex-wrapper">
            <div className="top">
              <span>
                <img src="/logo.png" alt="" />
              </span>
            </div>
            <div className="left">
              {/* <div className="greet">Hi there!</div> */}
              <h3>Where your README files get that Extra Drip</h3>
              <a href="#section2" onClick={handleScroll}>
                Let's Go!
              </a>
            </div>
          </div>
        </div>
      </animated.section>

      <section id="section2" className="form">
        <Form
          setFormData={setFormData}
          setIsSubmitted={setIsSubmitted}
          formData={formData}
        />
      </section>

      <section id="section3" className="container">
        <SyntaxContainer isSubmitted={isSubmitted} formData={formData} />
      </section>
    </div>
  );
};

export default HomePage;
