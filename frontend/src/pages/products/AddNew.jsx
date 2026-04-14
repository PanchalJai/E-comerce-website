import React, {useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function AddNew() {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        title:"",
        price: "",
        image:"",
        description:"",
        stock: "",
        rating: "",
    });

    const { title, price, rating, image,stock, description } = inputValue;

    const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    })
    };


    const handleSubmitProduct = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/products/newproduct", inputValue)
        .then((response)=> {
        toast.success(response.data.message, {position:"top-right"});
        navigate("http://localhost:5173/admin")
        })
        .catch((error) => {
        console.log(error);
        })
         setInputValue({
            title:"",
            price: "",
            image:"",
            description:"",
            stock: "",
            rating: "",
        })
    };

  
    return ( 
    <div className='container p-3 row  m-5 p-5 '>
        <h2 className='text-center text-danger fw-bolder'>Add New Product</h2>
        <form action="" className=' border rounded p-3 col-9 m-auto row  ' onSubmit= {handleSubmitProduct}>
            <label className='offset-2 fs-4 mt-2' htmlFor="title">Title</label>
            <input type='text'className='col-8 m-auto fs-4' placeholder='Enter Product Name' name='title' value={title} onChange={handleOnChange} />
            
            <label htmlFor="price" className=' fs-4 mt-2 offset-2'>Price</label>
            <input type='number' name='price' placeholder='Enter Price' className='col-8 m-auto fs-4' value={price} onChange={handleOnChange} />
        
            <label htmlFor="rating" className=' fs-4 mt-2 offset-2'>Rating</label>
            <input type='number'  name='rating' placeholder='Rate your product' className='col-8 m-auto fs-4' value={rating} onChange={handleOnChange} />
        
            <label htmlFor="image" className='offset-2 fs-4 mt-2'>Image</label>
            <input type='string' name='image' placeholder='Enter image link' className='col-8 m-auto fs-4' value={image} onChange={handleOnChange} />

            <label htmlFor="stock" className='offset-2 fs-4 mt-2'>Stock</label>
            <input type='number' name='stock' placeholder='Enter the stock of product' className='col-8 m-auto fs-4' value={stock} onChange={handleOnChange} />


            <label htmlFor="description" className='offset-2 fs-4 mt-2'>Description</label>
            <textarea type='text' name='description' placeholder='Write a short description' className='col-8 m-auto fs-4' value={description} onChange={handleOnChange} ></textarea>

           
           
            
            <button type='submit' className='col-5 m-auto fs-4 mt-5 btn btn-info '>Add New Product</button>
        </form>
        <ToastContainer />
    </div> 
    );
}

export default AddNew;

// add new functionality

// "title": "Apple iPhone 13 (128GB)",
//   "price": 59999,
//   "image": "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
//   "description": "Apple iPhone 13 with A15 Bionic chip, 6.1-inch Super Retina XDR display and dual camera system.",
//   "stock": 25,
//   "rating": 4.7