import { Navigate, Route, Routes } from 'react-router-dom';

import Home from "../../pages/home/Home";
import Chat from "../../pages/chat/Chat";
import Login from "../../pages/login/Login";
import SignUp from "../../pages/signup/SignUp";

import { useAuthContext } from "../../context/AuthContext";

const LeftSide = () => {
  const { authUser } = useAuthContext();

  return  <div className="w-full md:w-3/4 flex items-center justify-center">
    <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to="/login"/>} />   
      <Route path='/chat' element={authUser ? <Chat /> : <Navigate to="/login"/>} /> 
      <Route path='/login' element={authUser ? <Navigate to="/chat"/> : <Login />} /> 
      <Route path='/signup' element={authUser ? <Navigate to="/chat"/> : <SignUp />} /> 
    </Routes>
  </div>
}

export default LeftSide;