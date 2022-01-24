import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css'
import LoginPage from './pages/LoginPage'
import Home from './pages/HomePage'

function App() {
    const isLogin = useSelector(state => state.loginStateSlice.isLogin)
    const navigate = useNavigate()
    useEffect(() =>{
        if (isLogin) {
            navigate('/')
        }
        else {
            navigate('/login')
        }
    }, [isLogin])
    
    return (
        <>
           <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/login" element={<LoginPage/>} />
           </Routes>
        </>
    )
}

export default App

