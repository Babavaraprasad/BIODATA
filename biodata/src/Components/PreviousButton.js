import "./PreviousButton.css";
import previous from "../Images/previous.png";
import { useNavigate } from "react-router";

export const PreviousButton = (onClickHandler) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    if (onClickHandler) {
      navigate(-1);
    }
  };
  return (
    <div>
      <img
        className="previous-button"
        src={previous}
        alt="cannot redirect to previos"
        onClick={clickHandler}
      ></img>
    </div>
  );
};
