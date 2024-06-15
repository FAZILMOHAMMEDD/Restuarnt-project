import { useState } from 'react'
import { useRef } from 'react';
import one from '../assests/images/res-1.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import bur from '../assests/images/what.jpeg'


function Navbar()

{
  var searchRef=useRef()
var[ismobile,setmobile]=useState(false)
var[cart,setcart]=useState(false)
function searchhandle()
{
  searchRef.current.classList.toggle("active")
}
function handle()
{
  setmobile(!ismobile)
}
function handecart()
{
  setcart(!cart)
}


  return(
   <div className="navbar-container">
    <div className="navbar-1">
      <h1><img src={one} alt="Home"></img></h1>
    </div>
    <div className={ismobile?"nav-links":"navbar-2"}>
    <p><a href="#home">HOME</a></p> 
    <p><a href="#menu">MENU</a></p>
    <p><a href="#product">PRODUCTS</a></p>
    <p><a href="#review">REVIEWS</a></p>
    <p><a href="#contact">CONTACT</a></p>
    <p><a href="#about">ABOUT</a></p>
    </div>
    <div className='navbar-3-container'>
    <div className="navbar-3" onClick={searchhandle}>
    <IoSearchSharp/>
    </div>
    <div className="navbar-31" onClick={handecart} >
     {cart?<FaShoppingCart/>:<FaShoppingCart/>}
    </div>
    </div>
   <div className='search 'ref={searchRef} >
    <input placeholder='search'></input>
   </div>
    <div onClick={handle} className='hulk' >
{ismobile?<IoCloseSharp/>:<GiHamburgerMenu />}
    </div>
    <div className={cart?"cart":"cartnav"}>
    <div className='cart-container' >
    <div className='cart-image'>
    <img src={bur} alt='burde' ></img>
    </div>
    <div className='cart-text'>
     <h5>CART ITEM 01</h5>
     <p>$15.99</p>
    </div>
    <div className='cart-remove'>
    <IoCloseSharp/>
    </div>
    
    </div>
    <div className='cart-container' >
    <div className='cart-image'>
    <img src={bur} alt='burde' ></img>
    </div>
    <div className='cart-text'>
     <h5>CART ITEM 01</h5>
     <p>$15.99</p>
    </div>
    <div className='cart-remove'>
    <IoCloseSharp/>
    </div>
    
    </div>
    <div className='cart-container' >
    <div className='cart-image'>
    <img src={bur} alt='burde' ></img>
    </div>
    <div className='cart-text'>
     <h5>CART ITEM 01</h5>
     <p>$15.99</p>
    </div>
    <div className='cart-remove'>
    <IoCloseSharp/>
    </div>
    
    </div>
    <div className='cart-container' >
    <div className='cart-image'>
    <img src={bur} alt='burde' ></img>
    </div>
    <div className='cart-text'>
     <h5>CART ITEM 01</h5>
     <p>$15.99</p>
    </div>
    <div className='cart-remove'>
    <IoCloseSharp/>
    </div>
    
    </div>
    <div className='cart-container' >
    <div className='cart-image'>
    <img src={bur} alt='burde' ></img>
    </div>
    <div className='cart-text'>
     <h5>CART ITEM 01</h5>
     <p>$15.99</p>
    </div>
    <div className='cart-remove'>
    <IoCloseSharp/>
    </div>
    
    </div>
    <button>CHECKOUT</button>
    </div>
   </div>
    
  )
}
export default (Navbar)
