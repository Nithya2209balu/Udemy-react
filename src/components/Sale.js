
import saleimg from "../assets/images/sale-image.jpg"

function Sale()
{
return(
  <div className="sale-image">
      <img src={saleimg} alt="sale-image" />
      <div className="sale-image__offer">
        <h2>Udemy Flash Sale! 24 hours to save.</h2>
        <p>Get the top courses for just 499.Just one day to save but a liftime to learn</p>
        </div>
    </div>
)

}

export default Sale