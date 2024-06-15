import {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login(props)
{
  var navigate=useNavigate()
  var users=props.users
  
  var [ruser,setruser]=useState(true)
  var[fname,setname]=useState("")
  var[ppass,setpass]=useState("")
  function fhandle(evt)
  {
    evt.preventDefault()
    setname(evt.target.value)
  }
  function phandle(evt)
  {
    evt.preventDefault()
    setpass(evt.target.value)
  }
  function fsubmit(evt)
  {
    evt.preventDefault()
    var logindetails=axios.get(`http://localhost:5000/?username=${fname}&password=${ppass}`)
    var usefound=false
    logindetails.then(function(data)
  {
    users.forEach(function(data)
    {
      if(data.username===fname && data.password===ppass)
        {
          navigate("/navbar") 
  
        }
        if(data.data === true)
          {
            usefound (true)
            navigate("/navbar") 
          }
          else
            {
              setruser(false)
            }
       
    })
  })
  }

  return(
    <div className='login-container'>
   <div className='login'>
    <h1>LOGIN</h1>
    {ruser?<p style={{color:" rgb(239, 17, 254)"}} >"YOU ORDER YOUR FOOD FIRST YOU LOGIN"</p>:<p style={{color:" rgb(238, 28, 77)"}}>"ORDER FOOD PLEASE SIGN UP YOUR PAGE"</p>}
    <input value={fname}  name='username' placeholder="username" onChange={fhandle}></input><br></br>
    <input value={ppass} name='password' placeholder="password" onChange={phandle}></input><br></br>
    <button onClick={fsubmit}>LOGIN</button><br></br>
    <p className='kop'>Don't have an account? <Link style={{color:" rgb(238, 28, 77)"}} to={'/signup'}>SIGN UP</Link></p>
   </div>
   </div>
  )
}
export default (Login)