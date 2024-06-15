import profile from "../assests/images/uniq.png"
import man from "../assests/images/man.png"
import girl from "../assests/images/girl.png"
import mans from "../assests/images/man-3.jpg"

function Review()
{
  return(
    <div class="review" id="review" >
      <h1>CUSTOMER REVIEW</h1>
      <h3>WHY WE PEOPLE CHOOSE US</h3>
      <div class="review-container">
        <div class="review-container-1">
         <img src={girl} alt="profile"></img>
         <h4>MANISHA</h4>
         <p>⭐⭐⭐⭐</p> 
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et vero illum officia, assumenda laborum odio. Sapiente voluptate asperiores ea</p>
        </div>
        <div class="review-container-1">
         <img src={man} alt="profile"></img>
         <h4>KIRUBA</h4>
         <p>⭐⭐⭐⭐</p>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et vero illum officia, assumenda laborum odio. Sapiente voluptate asperiores ea</p>
        </div>
        <div class="review-container-1">
         <img src={mans} alt="profile"></img>
         <h4>VIGHESH</h4>
         <p>⭐⭐⭐⭐</p>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et vero illum officia, assumenda laborum odio. Sapiente voluptate asperiores ea</p>
        </div>
        <div class="review-container-1">
         <img src={profile} alt="profile"></img>
         <h4>DAVID</h4>
         <p>⭐⭐⭐⭐</p>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam et vero illum officia, assumenda laborum odio. Sapiente voluptate asperiores ea</p>
        </div>

      </div>
    </div>
  )
}
export default (Review)