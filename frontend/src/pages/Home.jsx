import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

function Home() {
    const [data,setData] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3000/products").then((res)=>{
            // console.log(res.data)
            setData(res.data)
            
        })
        
    },[])

    console.log("data",data.length);
    

    return ( 
        <div className='container '>
            <div className='row d-flax flex-wrap justify-content-start m-auto' >
                {data.length > 0 ? (
                    data.map((item)=>(
                    <div className='border m-3' key={item._id} style={{width: '250px', padding: "0px"}} >
                    <div>
                        <img src={item.image} className='border-bottom'  style={{width: '250px', height: '200px', }} />
                    </div>
                    <div className='p-3'>
                        <p className='fs-5'>{item.title}</p>
                        <p>&#x20B9; {item.price}</p> 
                        <div style={{marginBottom: "0px"}} className='d-flax justify-content-around'>
                            <Link className='btn mt-2 btn-outline-info m-auto' to='/showproduct' state={{ id: item._id }} >Show Product</Link >
                            <span className='mx-3'>{item.rating} <i class="fa-solid text-warning fa-star"></i></span>
                            
                        </div> 
                            
                              
                        
                        
                    </div>
                    </div>
                    ))
                    
                ): (
                    <h2>Loading...</h2>
                )
                
            }
                
            
            </div>
        </div>
     );
}

export default Home;

// ragister as an admin and upload the data
// ragister as an user then buy the product