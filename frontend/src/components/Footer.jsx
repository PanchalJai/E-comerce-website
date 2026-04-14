import React from 'react'
import "./Footer.css"

function Footer() {
    return ( 
    <div className='container-fluid bg-secondary-subtle' style={{height:"150px", }}>
        <div className='container text-center p-5 mt-5'>
            <a href="/">Home</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a  href="/aboutus">About Us</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a className='  ' href="/">terms</a>
          
        </div>
    </div>
);
}

export default Footer;