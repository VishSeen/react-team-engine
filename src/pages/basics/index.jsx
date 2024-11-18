import ProfileCard from '../../components/profile-card/index.jsx';
import './style.css'

const BasicsPage = () => {
  return (
    <main className="basics-page">
      <section className="hero is-primary mb-5">
        <div className="hero-body">
          <h1 className='title'>Basics Page</h1>
          <p className='paragraph'>
            Covering the basics of React JS. Below are some of the points covered in this page:
          </p>
          <ul style={{ marginLeft: '10px', marginTop: '10px' }}>
              <ol>Manipulating html elements</ol>
              <ol>Using props in html elements</ol>
              <ol>Passing Props</ol>
              <ol>Using external components</ol>
              <ol>Local Images</ol>
            </ul>
        </div>
      </section>

      <section className='props-section mx-6'>
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