import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation,Link } from "react-router-dom";

function ShowAdmin() {
    const location = useLocation();
    console.log(location); 
    
    const { id } = location.state;
    const [data, setdata] = useState([]);


    useEffect(()=> {
        axios.get(`http://localhost:3000/products/product/${id}`).then((res)=>{
            console.log("response",res.data);
            setdata(res.data);

        },[])
    })

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            alert("Deleted successfully");

            // refresh UI
            setData(data.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };
    return ( 
        <div className='container'>
            
                <div>
                    <div className='my-3 d-flex justify-content-end'>
                        <Link className='btn btn-outline-info' style={{ textDecoration: "none", marginRight:"30px", fontSize:"25px", fontWeight:"500" }}>Edit</Link>
                        <Link className='btn btn-outline-danger' style={{ textDecoration: "none", marginRight:"30px", fontSize:"25px", fontWeight:"500" }} onClick={() => handleDelete(item._id)} >Delete</Link>
                    </div>
                    <h1 className='my-3'>{data.title}</h1>
                    
                        <img src={data.image} style={{width:'600px', height: "500px"}} />
                       
                 
                    
                    <p className='fs-3'>Price:</p>
                    <p className='fs-2 fw-bolder'>&#x20B9; {data.price}</p>
                    <p className='fs-3 fw-bold'>Description</p>
                    <p className='fs-3'>{data.description}</p>
                    
                    <p className='fs-3'><span className='fw-bold'>Stock: </span>{data.stock}</p>
                    
                    <p>

                        Rating: &nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='fs-3'>
                            {data.rating} <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star"></i>
                            <i class="fa-solid text-warning fa-star-half"></i>
                        </span> 
                    </p>
                </div>
           
            
        </div>
     );
}

export default ShowAdmin;