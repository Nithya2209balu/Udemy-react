import five from "../assets/images/c5.jpg"
import six from "../assets/images/c6.jpg"
import seven from "../assets/images/c7.jpg"
import eight from "../assets/images/c8.jpg"
import nine from "../assets/images/c9.jpg"
import ten from "../assets/images/c10.jpg"
import one from "../assets/images/c1.jpg"
import twelve from "../assets/images/c12.jpg"

function Popular()
{
  return(
    <div class="--popular">
      <h1 class="popular__title">Most Popular</h1>
      <p class="popular__subtitle">Pick the best fit</p>
      <div class="popular__container">
        <div class="course-card">

          <img src={five} alt='five' />
          <h3>2023 Python Data Visulisation Materclass</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449<del>1999</del></p>
        </div>

        <div class="course-card">
          <img src={six} alt='six' />
          <h3>2023 Advance programming with EMC</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>450<del>1999</del></p>
        </div>

        <div class="course-card">
          <img src={seven}  alt='seven'/>
          <h3>Web Development Bootcamp 2023</h3>
          <p>col steele</p>
          <p>3.9⭐⭐⭐</p>
          <p>449<del>1999</del></p>
        </div>

        <div class="course-card">
          <img src={eight} alt='eight' />
          <h3>Master UI/UX Designing with Figma</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>440<del>1999</del></p>
        </div>
        <div class="course-card">
          <img src={nine} alt='nine'/>
          <h3>2023 Python Data Visulisation Materclass</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449<del>1999</del></p>
        </div>

        <div class="course-card">
          <img src={ten} alt='eleven' />
          <h3>2023 Advance programming with EMC</h3>
          <p>col steele</p>
          <p>2.9⭐⭐</p>
          <p>450<del>1999</del></p>
        </div>

        <div class="course-card">
          <img src={twelve} alt='tewlve' />
          <h3>Web Development Bootcamp 2023</h3>
          <p>col steele</p>
          <p>4.9⭐⭐⭐</p>
          <p>449<del>1999</del></p>
        </div>

        <div class="course-card">
          <img src={one} alt='one'/>
          <h3>Master UI/UX Designing with Figma</h3>
          <p>col steele</p>
          <p>3.9⭐⭐⭐</p>
          <p>440<del>1999</del></p>
        </div>
      </div>
    </div>

  )
}

export default Popular