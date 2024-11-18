import { useState } from "react";

const AnimalCounter = () => {
  const [counter, setCounter] = useState(0);


  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };


  return (
    <>
    <div className="animal-counter">
      <div>
        <p>Number of Animals : {counter}</p>
      </div>
      <button class="button" onClick={handleClick}>Add Animal</button>
    </div>
    </>
  );
};

export default AnimalCounter;
