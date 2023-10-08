import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarSection from "../components/NavbarSection";
import { useContext, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider/AuthProvider";

const Login = () => {

    const {googleSignIn,logIn} =useContext(AuthContext)
    const location =  useLocation()
    const navigate = useNavigate()
    const [error,setError] = useState('')
    const handleLogin =(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logIn(email,password)
        .then(result => {

            console.log(result.user)
            navigate(location?.state? location.state : "/")
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => setError("Email and PassWord Doesn't Match"))

    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            navigate(location?.state? location.state : "/")

        })
        .catch(error => {
            console.error(error.message)
        })
    }
  return (
    <div>
      <NavbarSection></NavbarSection>

      <div>
        <div className="hero p-10 ">
          <div className="hero-content w-full flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold bg-white text-Black  px-32 py-2 rounded shadow-2xl border-t-8 border-black">Login now</h1>
              
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  
                </div>
                <p className="text-red-500">{error}</p>
                <div className="form-control mt-6 items-center ">
                  <button className="btn btn-primary bg-black text-white font-bold w-full">Login</button>
                </div>
              </form>
              <p className="text-center mb-3 font-thin">Do not Have an Account?? <Link className="text-red-500 underline" to="/register">Sign Up</Link></p>
              <button onClick={handleGoogleSignIn} type="button" className="w-full py-3 px-4 inline-flex justify-center border-b-8 border-black items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
              </svg>
              Sign in with Google
            </button> 
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Login;
