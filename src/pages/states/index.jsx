import AnimalCounter from "../../components/animal-counter";
import AnimalShow from "../../components/animal-show";
import { useState } from "react";

import "../../styles/globals.css";

const StatesPage = () => {
  const [animals, setAnimals] = useState([]);

  const handleRandomClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

    return animals[Math.floor(Math.random() * animals.length)];
  };

  return (
    <main className="states-page">
      <section className="hero is-primary mb-5">
        <div className="hero-body">
          <h1 className="title">React State Management</h1>
          <p className="paragraph">
            We will learn about the states in react js. States are variable that
            changes and trigger a re render of the component that is using it.
            Always update states from the "SETTER" function so that rerenders
            occur.
          </p>

          <ul style={{ marginLeft: "10px", marginTop: "10px" }}>
            <ol>Creating states</ol>
            <ol>Updating states on click of a button</ol>
          </ul>
        </div>
      </section>

      <section className="components mx-5">
        <h3>Animal Counter</h3>
        <p>
          Here we created an animal counter which on click of the button updates
          the counter on the text.
        </p>
        <br />
        <AnimalCounter />
      </section>

      <section className="components mx-5">
        <h3>Animal Counter</h3>
        <p>
          Here we created an animal counter which on click of the button updates
          the counter on the text.
        </p>
        <br />

        <div className="animals">
          <p>Types of Animals :</p>
          <br />
          <div
            className="content"
            style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}
          >
            {animals.map((item, i) => {
              return (
                <div>
                  <AnimalShow type={item} key={i} />
                </div>
              );
            })}
          </div>
        </div>

        <button class="button" onClick={handleRandomClick}>
          Add Animal
        </button>
      </section>
    </main>
  );
};

export default StatesPage;
