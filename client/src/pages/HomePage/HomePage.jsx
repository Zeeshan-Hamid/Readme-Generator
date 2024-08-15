import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="header" id="section1">
        <h1 className="title">ReadMe Generator</h1>
        <div className="wrapper">
          <div className="left">
            <div className="greet">
              <p>Hi there </p>
            </div>
            <div className="header-text">
              <h3>Welcome to the Coolest <span>Readme Generator</span> on Internet!</h3>
            </div>
            <a href="#">Lets Go!!</a>
          </div>
          <div className="right">Yahan Image hogi</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
