
import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"


function Recommended()
{
  return(
    <div className="recommended">
      <h1 className="recommended__title">Recommended for you</h1>
      <p>Pick the best fit</p>
      <div className="recommended__container">
        <div className="course-card">
          <img src={one}  alt='one'/>
          <h3>2023 Python Data Visulisation Materclass</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449<del>1999</del></p>
        </div>

        <div className="course-card">
          <img src={two} alt='two' />
          <h3>2023 Advance programming with EMC</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>450<del>1999</del></p>
        </div>

        <div className="course-card">
          <img src={three} alt='three' />
          <h3>Web Development Bootcamp 2023</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐</p>
          <p>449<del>1999</del></p>
        </div>

        <div className="course-card">
          <img src={four} alt='four'/>
          <h3>Master UI/UX Designing with Figma</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>440<del>1999</del></p>
        </div>
      </div>
    </div>
  )
}

export default Recommended