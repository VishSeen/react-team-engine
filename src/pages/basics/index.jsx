import ProfileCard from '../../components/profile-card/index.jsx';
import './style.css'

const BasicsPage = () => {
  return (
    <main className="basics-page">
      <div className="info-content">
        <h1>Basics Page</h1>
        <p>
          Covering the basics of React JS. Below are some of the points covered in this page:
        </p>
      </div>

      <section className='props-section'>
        <h3>Props Section</h3>

        <div className="cards">
          <ProfileCard title={"Alexa"} handle="@alexa99" />
          <ProfileCard title={"Cortana"} handle="@Cortana32" />
          <ProfileCard title={"Siri"} handle="@siri01" />
        </div>
      </section>

    </main>
  )
}


export default BasicsPage;