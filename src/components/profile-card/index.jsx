import './style.css';

const ProfileCard = ({
  title,
  handle
}) => {
  return (
    <div className="profile-card card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{title}</p>
            <p class="subtitle is-6">{handle}</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;