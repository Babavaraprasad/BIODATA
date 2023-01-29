import nextButton from "../Images/nextButton.png";
import "./NextButton.css";
import { useNavigate } from "react-router";

export const NextButton = (onClickHandler) => {
  const navigate = useNavigate();

  const redirectNextpage = () => {
    if (onClickHandler) {
      navigate("/ExperienceEducation");
    }
  };
  return (
    <img
      className="img"
      src={nextButton}
      alt="cannot redirect to next page"
      onClick={redirectNextpage}
    ></img>
  );
};
