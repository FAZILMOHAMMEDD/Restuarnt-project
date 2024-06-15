import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Sign(props)
{
  var users=props.users
  var setusers=props.setusers
  var navigate=useNavigate()
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
  function handlesign()
  {
    setusers([...users,{username:fname,password:ppass}])
    navigate("/login")
  }
 
  return(
   <div className='sign-container'>
    <div className='sign'>
    <h1>SIGN UP</h1>
    <input value={fname} placeholder="username" onChange={fhandle}></input><br></br>
    <input value={ppass} placeholder="password" onChange={phandle}></input><br></br>
    <button onClick={handlesign}>SIGN UP</button><br></br>
   </div>
   </div>
  )
}
export default (Sign)