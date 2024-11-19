import { useState } from "react";
import SearchBar from "../../components/search-bar";
import "../../styles/globals.css";
import "./style.css";
import getImages from "../../services/api";
import UnsplashCard from "../../components/unsplash-card";

const ApiPage = () => {
  const [data, setData] = useState();

  const handleSearch = async (e) => {
    await searchData(e);
  };

  const searchData = async (search) => {
    const response = await getImages(search);
    const json = await response;
    setData(json);
  };

  return (
    <main className="states-page">
      <section className="hero is-primary px-5">
        <div className="hero-body">
          <h1 className="title">Fetching API data</h1>
          <p className="paragraph">
            Learn about data fetching in this page. fetch function using
            async/await and how to retrieve data with an ApiKey. <br />
            OnChange and onClick events has been covered as well as child to
            parent state passing.
          </p>

          <ul style={{ marginLeft: "10px", marginTop: "10px" }}>
            <ol>- Fetching external data through helper functions.</ol>
            <ol>- Accessing third party using api keys found in .env</ol>
            <ol>- Handling onSubmit form to start fetching.</ol>
            <ol>- Passing data from Child to Parent</ol>
          </ul>
        </div>
      </section>

      <section className="px-5 mb-5">
        <SearchBar handleSearch={handleSearch} />
      </section>

      <section className="card-container px-5">
        {data &&
          data.results.map((item, index) => {
            return <UnsplashCard data={item} key={index} />;
          })}
      </section>
    </main>
  );
};

export default ApiPage;
