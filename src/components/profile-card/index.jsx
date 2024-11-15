import './style.css';

const ProfileCard = ({
  title,
  handle
}) => {
  return (
    <div className="profile-card">
      <h2>{title}</h2>
      <p>
        {handle}
      </p>
    </div>
  )
}

export default ProfileCard;