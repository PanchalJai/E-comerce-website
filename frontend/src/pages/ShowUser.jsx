import React, { useEffect, useState } from 'react'
import { useLocation,Link } from 'react-router-dom';
import axios from "axios";

function ShowUser() {
    
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

    const addToCart = async (product) => {
        try {
            const userId = localStorage.getItem("userId"); // or from auth state

            const { data } = await axios.post("http://localhost:3000/cart/add", {
            userId,
            productId: product._id,
            quantity: 1
            });

            alert("Product added to cart");
            console.log(data);

        } catch (error) {
            console.log(error);
            alert("Error adding to cart ");
        }
    };

    const placeOrder = async () => {
        try {
            const res = await axios.post(
            "http://localhost:5000/api/orders/place",
            {
                address: "Delhi Street",
                city: "Delhi",
                pincode: "110001",
            },
            {
                headers: {
                Authorization: localStorage.getItem("token"),
                },
            }
            );

            alert("Order placed!");
            console.log(res.data);

        } catch (err) {
            console.log(err);
        }
        };
    
    return ( 
        <div className='container'>
            
                <div>
                    <div className='my-3 d-flex justify-content-end'>
                        <Link className='btn btn-outline-info' onClick={() => addToCart(data)}  style={{ textDecoration: "none", marginRight:"30px", fontSize:"25px", fontWeight:"500" }}>Add to Cart <i class="fa-solid fa-cart-shopping"></i></Link>
                        <Link className='btn btn-outline-info' onClick={placeOrder} style={{ textDecoration: "none", marginRight:"30px", fontSize:"25px", fontWeight:"500" }}>Buy Now <i class="fa-brands fa-shopify"></i></Link>
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

export default ShowUser;