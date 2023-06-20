import React from "react";
import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"


  

const Login = () => {

  const navigate = useNavigate()

  const [signIn,setSignIn] = useState({
    username:"",password:""
  })

  const onHandleChange =  (event) => {
    setSignIn({...signIn,[event.target.name]:event.target.value})
  }

  const onHandleClick = () => {

    axios.post("https://login-backend-final.onrender.com/Signin",signIn).then(res=> {
      console.log(res)

      localStorage.setItem("token",res.data.token)

      if(localStorage.getItem("token")) {

        localStorage.setItem("name",signIn.username)
        navigate('/profile')
      }
      
    }).catch(err=> {
      console.log(err)
    })
  }

  const onHandleNavigate = () => {
    navigate('/createUser')
  }








  return (
    <div style={{width:"500px",margin:"auto"}}>
    
    <h2>File Storage</h2>
    <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" name = "username" value = {signIn.username} onChange = {onHandleChange}/>
</div>

         <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" name = "password" value = {signIn.password} onChange = {onHandleChange}/>
</div>

      <button style = {{marginTop:"20px"}}type="button" class="btn btn-dark" onClick = {onHandleClick}>Sign In</button>


    <br/>

      <button style = {{marginTop:"20px"}}type="button" class="btn btn-success" onClick = {onHandleNavigate}>Sign up</button>

            <h6>New User ? Click on Sign up above</h6>




    </div>
  )
}

export default Login;