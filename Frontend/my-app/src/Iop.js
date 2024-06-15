import Login from "./Components/Login";
import Sign from "./Components/Sign";
import{BrowserRouter, Route, Routes}from "react-router-dom"
import { useState } from 'react';
import Navbar from "./Components/Navbar";
  
function Iop()
{
  var [users,setusers]=useState(
    [
      {
        username:"fazil",
        password:"123"
      },
       {
        username:"abc",
        password:"123"
      }])
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users}/>}> </Route>
      <Route path='/signup' element={<Sign users={users} setusers={setusers}/>}> </Route>
      <Route path="/navbar" element={<Navbar/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  
  )
}
export default(Iop)