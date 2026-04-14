import axios from 'axios';
import React, { useEffect, useState,  } from 'react'
import { useLocation,  Link  } from 'react-router-dom';


function Admin() {
    const location = useLocation();
    const data = location.state;
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3000/products/admin").then((response)=> {
            const posts = response.data
            setPosts(response.data)
        })
    })

    return ( 
        <div className='container'>
            
            <h2 className='offset-2 my-4'>Hi {data.user}</h2>

            <h2 className='text-center fs-1 fw-bolder'>My Products</h2>
            <Link className='btn btn-outline-primary' to='/admin/addnewproduct' >Add New Product</Link >
            
            
            {posts.map((item ) => ( 
                <div key={item._id} className='row m-3 p-3' style={{ padding: "0px"}}>
                    <div className='col-3'>
                        <img src={item.image} style={{width: '250px', height: '200px', }}/>
                        <br />
                        <Link className='btn btn-outline-info m-auto' to='/admin/showproduct' state={{id : item._id}} >Show Product</Link >
                    </div>
                    <div className='col-8'>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                        <p>{item.rating} <i class="fa-solid text-warning fa-star"></i></p>
                        <p>{item.stock}</p>
                    </div>
                    
                    
                </div>
            ))
            }

        </div>
     );
}

export default Admin;

//  add admin id X
// fetch data from db to home page and admin page