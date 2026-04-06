import React from 'react'
import {Link } from 'react-router-dom'


function Navbar () {
    const token = localStorage.getItem("token");
    
    return ( 
        <div className='container-fluid  bg-primary-subtle p-3  border-bottom'  >
            <div className='d-flex justify-content-between container'>
                <h1 className='fw-bolder'><Link  style={{ textDecoration: "none", color:"Black"  }} className='link-item' to="/" >E-Commerce website</Link></h1>
                <div className='top-tabs ' >
                    
                    <span><Link  style={{ textDecoration: "none", color:"Black",marginRight:"30px", fontSize:"25px", fontWeight:"500"  }} className='link-item' to="/signup" >Sign Up</Link></span>
                    <span><Link  style={{ textDecoration: "none", color:"Black",marginRight:"30px", fontSize:"25px", fontWeight:"500" }} className='link-item' to="/aboutus">About Us</Link></span>
                    <span><Link  style={{ textDecoration: "none", color:"Black",marginRight:"30px", fontSize:"25px", fontWeight:"500" }} className='link-item' to="/orders">Orders</Link></span>
                    <span><Link  style={{ textDecoration: "none", color:"Black",marginRight:"30px", fontSize:"25px", fontWeight:"500" }} className='link-item' to="/addtocart">Cart</Link></span>
                
                </div>
            </div>
        </div>
     );
}

export default Navbar;