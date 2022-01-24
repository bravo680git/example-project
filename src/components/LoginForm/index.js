//src/components/LoginForm/index.js
import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import logo from '../../assets/images/logo_sistech.jpg'
import login from '../../apis/login'
import { setLoginState } from '../../store'
import './LoginForm.css'

function LoginForm() {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const usernameRef=useRef()
    const passwordRef=useRef()
    const dispatch = useDispatch()
    const handleLogin = async () => {
        if (username==='') {
            usernameRef.current.style.border="1px solid red"
        }
        if (password.length<7) {
            passwordRef.current.style.border="1px solid red"
        } 
        else {
            const data={
                username,
                password
            }
            const resObject = await login(data)
            if (resObject && resObject.data.token) {
                const authToken=resObject.data.token.authToken
                const employeeName= `${resObject.data.employee.firstName} ${resObject.data.employee.lastName} `
                localStorage.setItem('authToken', authToken)
                localStorage.setItem('employeeName', employeeName)
                localStorage.setItem('isLogin', 'true')
                dispatch(setLoginState({
                    isLogin: true,
                    authToken,
                    employeeName
                }))
            }
        }    
    }

    return (
        <>
            <div className="loginContainer">
                <div className="loginLogoBox">
                    <img src={logo} alt="sisteth logo"/>
                    <div>Water treatment monitoring program</div>
                </div>
                <div className="loginInput">
                    <label htmlFor="username">Username</label>
                    <input
                        name="username"
                        ref={usernameRef}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className="loginInput">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        ref={passwordRef}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="loginBtn">
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        </>
    )
}

export default LoginForm