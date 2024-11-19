import { useEffect, useState } from "react";
import SearchBar from "../../components/search-bar";
import "../../styles/globals.css";
import "./style.css";
import getImages from "../../services/api";

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
          <p className="paragraph"></p>

          <ul style={{ marginLeft: "10px", marginTop: "10px" }}>
            <ol>Creating states</ol>
            <ol>Updating states on click of a button</ol>
          </ul>
        </div>
      </section>

      <section className="px-5 mb-5">
        <SearchBar handleSearch={handleSearch} />
      </section>

      <section className="card-container px-5">
        {data &&
          data.results.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={item.urls.regular} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src={item.user.profile_image.large}
                          alt={item.alt_description}
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{item.user.first_name}</p>
                      <p className="subtitle is-6">{item.user.last_name}</p>
                    </div>
                  </div>

                  <div className="content">
                    {item.user.bio}
                    <br />
                    <hr />
                    <a href="#">Instagram</a>
                    <br />
                    <time dateTime="2016-1-1">{item.created_at}</time>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default ApiPage;
