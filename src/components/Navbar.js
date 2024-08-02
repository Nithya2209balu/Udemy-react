
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function Navbar()
{
return(
  <div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">Udemy</h1>
      </div>
      
      <div className="navbar__s2">
        <i>< IoSearch /></i>
        <input placeholder="Search for anything here.Tech,Business,Art.. " />
      </div>
      <div className="navbar__s3">
        <p>Courses</p>
        
         <div className="mylearning">
          <p>My Learning</p>
          <div className="mylearning__popup">
            <p>You did not purchase anything yet</p>
            </div>
          </div>
        <i ><FaShoppingCart /></i>
        <i ><FaBell /></i>
        <i ><FaUser /></i>
      </div>
      <div  className="navbar__s4">
        <i><FaBars /></i>
      </div>
    </div>

      

)
}

export default Navbar