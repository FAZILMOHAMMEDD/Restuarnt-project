import bur from '../assests/images/what.jpeg'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
function Product()
{
  return(
    <div class="product-container" id='product' >
      <div class="product-1" >
        <h1>OUR PRODUCTS</h1>
      </div>
      <div class="product-profile">
        <div class="product-p">
          <div className='icon'>
            <div className='icon-1'>
            <p><FaShoppingCart/></p>
            </div>
            <div className='icon-1'>
            <p><FaHeart/></p>
            </div>
            <div className='icon-1'>
            <p><FaEye/></p>
            </div>
           
          </div>
         <img src={bur} alt='burger'></img>
         <h3>FRESH BURGER</h3>
         <p>4.9 ⭐⭐⭐⭐</p>
         <p>$15.99 <span>200.99</span></p>
        </div>
        <div class="product-p">
        <div className='icon'>
            <div className='icon-1'>
            <p><FaShoppingCart/></p>
            </div>
            <div className='icon-1'>
            <p><FaHeart/></p>
            </div>
            <div className='icon-1'>
            <p><FaEye/></p>
            </div>
           
          </div>
         <img src={bur} alt='burger'></img>
         <h3>FRESH BURGER</h3>
         <p>4.9 ⭐⭐⭐⭐</p>
         <p>$15.99 <span>200.99</span></p>
        </div>
        <div class="product-p">
        <div className='icon'>
            <div className='icon-1'>
            <p><FaShoppingCart/></p>
            </div>
            <div className='icon-1'>
            <p><FaHeart/></p>
            </div>
            <div className='icon-1'>
            <p><FaEye/></p>
            </div>
           
          </div>
         <img src={bur} alt='burger'></img>
         <h3>FRESH BURGER</h3>
         <p>4.9 ⭐⭐⭐⭐</p>
         <p>$15.99 <span>200.99</span></p>
        </div>
      </div>
    </div>
  )
}
export default (Product)