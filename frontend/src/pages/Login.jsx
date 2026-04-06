import React, {useState} from 'react'

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        role:"user",
    });
    const { email, password,role } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
        ...inputValue,
        [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
        position: "bottom-left",
        });
    const handleSuccess = (msg) =>
        toast.success(msg, {
        position: "bottom-left",
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const { data } = await axios.post(
            "http://localhost:3000/login",
            {
            ...inputValue,
            },
            { withCredentials: true }
        );
        console.log(data);
        const { success, message } = data;
        if (success) {
            handleSuccess(message);
            setTimeout(() => {
            if (data.role === "admin") {
                navigate("/admin", { state: {  user : data.user } });
            } else {
                    navigate("/home");
            }
            }, 1000);
        } else {
            handleError(message);
        }
        } catch (error) {
        console.log(error);
        }
        setInputValue({
        ...inputValue,
        email: "",
        password: "",
        role:"user"
        });
    };
    return ( 
        <div className='container'>
            <h1 className='text-center my-3'> Login </h1>
            <form 
                action="" 
                onSubmit={handleSubmit} 
                className=' m-auto row' 
                style={{width:"60%"}} >
               
                <label 
                    htmlFor="email" 
                    className='offset-2 mt-3 fs-4'
                    >Email
                </label>
                <input 
                    type="email" 
                    className='col-8 m-auto fs-4 p-1 rounded' 
                    name='email'
                    value={email} 
                    placeholder='Type your email id for login' 
                    onChange={handleOnChange} />
                <label 
                    htmlFor="password" 
                    className='offset-2 mt-3 fs-4'
                    >Passward
                    </label>
                <input 
                    type="password" 
                    name='password'
                    value={password}
                    className='col-8 m-auto p-1 fs-4 rounded' 
                    placeholder='Type password for login'
                    onChange={handleOnChange} />

                <label 
                    htmlFor="role" 
                    className='offset-2 mt-3 fs-4'>
                        Choose account type:
                </label>
                <select name='role' id='role' value={role} className='col-8 m-auto fs-4 mb-5 p-1  rounded' onChange={handleOnChange} >
                    <option value="user" className='col-8 m-auto fs-4 rounded' >user</option>
                    <option value="admin" className='col-8 m-auto fs-4 rounded' >admin</option>
                </select>
                <button className='col-5 fs-3 m-auto mt-5 rounded btn btn-info' type='submit'>Login</button>
            </form>
            <p className='text-center fs-3 mt-4'>Don't have an account?<Link to="/signup">Signup  </Link></p>
            <ToastContainer />
        </div>
     );
}

export default Login;