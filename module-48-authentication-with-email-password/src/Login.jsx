import {Link} from 'react-router';
import {sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase.info';
import { useRef, useState } from 'react';
const Login = () => {
  const emailRef = useRef()
  const [error,setError ] = useState(null)
  const handleSignIn = (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
        console.log(email,password)

    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      if(!result.user.emailVerified){
        alert('Your email is not verified')
      return;
      }
      console.log(result)
    })
    .catch(err => {
      console.error(err)
      setError('Invalid Credential')
      console.log(error)
    })
  }
  const handleForgetPassword = (e)=>{
    e.preventDefault()
    const email = emailRef.current.value
    sendPasswordResetEmail(auth,email).then(()=> alert('Check Your email'))
    console.log('clicked')
  }
  return (
    <div className="">
      <form onSubmit={handleSignIn} className=" flex flex-col w-5/12 mx-auto">
        <input
          className=" rounded-xl border border-gray-400 p-2"
          type="email"
          name="email"
          placeholder="Enter Email"
          ref={emailRef}
        />
        <input
          className=" rounded-xl border border-gray-400 p-2"
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <button onClick={handleForgetPassword}>forget Password?</button>
        <input
          className=" bg-black  rounded-xl border border-gray-400 p-2"
          type="submit"
          value="Log In"
        />
        
        <Link to={'/register'}>Register Now</Link>
      </form>
      <div>
        {
        error !== null ? <p>{error}</p>: ''
        }
      </div>
    </div>
  );
};

export default Login;
