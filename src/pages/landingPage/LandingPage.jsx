import { Button } from "react-bootstrap";
import FullPageContainer from "../../components/layout/FullPageContainer";
import "./landing.css";

const LandingPage = () => {
  return (
    <FullPageContainer>
      <div className="landing--panels__left"></div>
      <div className="landing--panels__right">
        <h1>Covax-19 is the hubspot for Covid vaccine reviews</h1>
        <p>
          You can update us with your post-vaccine symptons, read other reviews
          and explore our FAQ
        </p>
        <button className="landing-button-blue">Write A Review</button>
        <button className="landing-button-blue">Write A Review</button>
        <button className="landing-button-blue">Write A Review</button>
      </div>
    </FullPageContainer>
  );
};

export default LandingPage;
