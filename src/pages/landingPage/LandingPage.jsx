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

        <LandingButton color="btn-blue">Write A Review</LandingButton>
        <LandingButton color="btn-brown">Browse Reviews</LandingButton>
        <LandingButton color="btn-green">FAQs</LandingButton>
      </div>
    </FullPageContainer>
  );
};

export default LandingPage;

const LandingButton = ({ children, color }) => (
  <button className={color}>{children}</button>
);
