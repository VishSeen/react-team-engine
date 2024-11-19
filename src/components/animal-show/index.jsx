import { createBrowserRouter } from "react-router-dom";
import bird from "../../svg/bird.svg";
import dog from "../../svg/dog.svg";
import cat from "../../svg/cat.svg";
import gator from "../../svg/gator.svg";
import horse from "../../svg/horse.svg";
import cow from "../../svg/cow.svg";

const svgMap = {
  dog,
  cat,
  cow,
  bird,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  return (
    <div className="animal-counter" style={{ display: "flex" }}>
      <div>
        <p>{type} </p>
        <img style={{ width: "110px" }} src={svgMap[type]} alt="animal" />
      </div>
    </div>
  );
};

export default AnimalShow;
