//src/components/Header/index.js
import { useSelector } from 'react-redux'
import logo from '../../assets/images/logo_sistech.jpg'
import './Header.css'
import useHandleLogout from '../../hooks/useHandleLogout'

function Header() {
    const state = useSelector(state => state.loginStateSlice)
    const handleLogout = useHandleLogout()
    
    return (
        <>
            <div className="headerContainer">
                <div className="headerLogo">
                    <img src={logo} alt="sistech logo" />
                </div>
                <div className="headerTitle">
                    Water treatment monitoring program
                </div>
                <div className="headerBtn">
                    { state.employeeName && <div>{state.employeeName}</div>}
                    { state.isLogin &&
                        <button onClick={handleLogout}>
                            Log out
                        </button>}
                </div>
            </div>
        </>
    )
}

export default Header