import React, { useContext, useState } from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from 'react-router-dom' 
import Modal from './Modal'
import { AuthContext } from '../contexts/AuthProvider'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      
      const {signinWithGmail,createUser, updateUser} = useContext(AuthContext);
      const [errorMassage, setErrorMassege] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
   
      const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        createUser(email, password).then((result) => {
          // Signed up 
          const user = result.user;
          updateUser(email, data.photoURL).then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axios.post("http://localhost:6002/users", userInfo)
              .then((response) => {
                console.log(response);
                alert("Signin successful!");
                navigate("/", { replace: true });
              });
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        })
      }

      //google login 
    const handLogin = ()=>{
        signinWithGmail().then((result)=>{
            const user = result.user;
            alert("Login Success")
            navigate("/", {replace: true})
        }).catch((error)=> {
            const errorMessage = error.message;
            alert("Login Failed!")
        })
    }
  return (
    <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20'>
         <form className="card-body" onSubmit={handleSubmit(onSubmit)}>            
            <h3 className="font-bold text-lg">Create an account!</h3>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"  {...register("email")}/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"  {...register("password")}/>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            {
                errorMassage ? <p className='text-red text-sm italic'>{errorMassage}</p> : ""
            }
            <div className="form-control mt-6">
                <button className="btn bg-green text-white">Signup</button>
            </div>
            <p className='text-center mt-4'>Do you have an account? <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="text-red underline">Signin</button></p>
            <Modal/>
            <div className='flex justify-center space-x-3 my-6'>
                <button className="btn btn-circle" onClick={handLogin}>
                    <FaGoogle />
                </button>
                <button className="btn btn-circle">
                    <FaFacebookF />
                </button>
                <button className="btn btn-circle">
                    <FaGithub />
                </button>
               
            </div>
        </form>
    </div>
  )
}

export default Signup
