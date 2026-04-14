import React from 'react'
import {Link } from 'react-router-dom'


function Navbar () {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const handleLogout = () => {
        if(!user) {
            alert("Already logout!");
            
        } else {
            localStorage.removeItem("user");
           
            alert("Logged out successfully");
            window.location.href = "/login";
        }
        
    };
    
    return ( 
        <div className='container-fluid  bg-primary-subtle p-3  border-bottom'  >
            <div className='d-flex justify-content-between container'>
                <h1 className='fw-bolder'>
                    
                    <Link   style={{ textDecoration: "none", color:"Black"  }} className='link-item' to="/" >E-Commerce website</Link></h1>
                <div className='top-tabs ' >
                    
                    
                    <span><Link  style={{ textDecoration: "none", color:"Black",marginRight:"30px", fontSize:"25px", fontWeight:"500" }} className='link-item py-5' to="/aboutus">About Us</Link></span>
                    <span><Link  style={{ textDecoration: "none", color:"Black",marginRight:"30px", fontSize:"25px", fontWeight:"500" }} className='link-item py-5' to="/orders">Orders</Link></span>
                    <span><Link  style={{ textDecoration: "none", color:"Black",marginRight:"30px", fontSize:"25px", fontWeight:"500" }} className='link-item py-5' to="/addtocart">Cart</Link></span>
                    <span className='dropdown py-5 ' >
                        <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ textDecoration: "none", color:"Black",marginRight:"30px",  fontSize:"25px", fontWeight:"500"  }} >
                            Sign Up
                        </button>
                        <ul class="dropdown-menu dropdown-menu">
                            <li><span><Link  style={{ textDecoration: "none", color:"Black", fontSize:"20px", fontWeight:"500"  }} className='link-item px-2 ' to="/signup" >Sign Up</Link></span></li>
                            <li><span><Link  style={{ textDecoration: "none", color:"Black", fontSize:"20px", fontWeight:"500"  }} className='link-item px-2' to='/login' >Login</Link></span></li>
                            
                            <li><hr class="dropdown-divider" /></li>
                            <li><span><Link  style={{ textDecoration: "none", color:"Black", fontSize:"20px", fontWeight:"500"  }} className='link-item px-2' onClick={handleLogout} >Log out</Link></span></li>
                        </ul>
                    </span>
                
                </div>
            </div>
        </div>
     );
}

export default Navbar;