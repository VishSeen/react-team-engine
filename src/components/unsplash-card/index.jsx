const UnsplashCard = ({ data }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={data.urls.regular} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={data.user.profile_image.large}
                alt={data.alt_description}
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{data.user.first_name}</p>
            <p className="subtitle is-6">{data.user.last_name}</p>
          </div>
        </div>

        <div className="content">
          {data.user.bio}
          <br />
          <hr />
          <a href="#">Instagram</a>
          <br />
          <time dateTime={data.created_at}>{data.created_at}</time>
        </div>
      </div>
    </div>
  );
};

export default UnsplashCard;
