import React from 'react'

function AboutUs() {
    return ( 
        <div className='container'>
            <h1 className='text-center my-3'>About Us</h1>
            <p className='fs-3 m-3 p-3'>
                This is a demo E-Commerce website as per project requirements. And I create some feature for user like: 
            </p>
                <div className='offset-1 row'>
                    <div className='col-6'>
                        <ul className='offset-1 fs-4'>
                            <li>Sign up Page</li>
                            <li>Login Page</li>
                            <li>Home - dashboard Page</li>
                            <li>Specific Product Page</li>
                            <li>view my orders</li>
                            <li>Add to cart</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul className='offset-1 fs-4'>
                             
                            <li>Place an Order</li>
                            <li>order page - details of users</li>
                            <li>Payment page - cash on delivery</li>
                            <li>Notification - order has been placed</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </div>   
                    
               <p className='fs-3 m-3 p-3'> 
                And also I create some feature for Admin like:
                </p>
              <div className='offset-1 row'>
                <div className='col-6'>
                    <ul className='fs-4'>
                        <li>Login page</li>
                        <li>Admin Dashboard page 
                            <ul>
                                <li>Add products</li>
                                <li>View customers</li>
                                <li>View orders</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='col-6'>
                    <ul className='fs-4'>
                        <li>Add product page</li>
                        <li>view orders page</li>
                        <li>view customers</li>
                        <li>Logout</li>
                    </ul>
                </div>
                
                

              </div>
            
        </div>
        
     );
}

export default AboutUs;