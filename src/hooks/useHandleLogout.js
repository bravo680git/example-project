//src/hooks/useHandleLogout.js
import { useDispatch } from "react-redux"
import { setLoginState } from "../store"

const useHandleLogout= () => {
    const dispatch = useDispatch()
    return () => {
        
        localStorage.removeItem('isLogin')
        localStorage.removeItem('employeeName')
        localStorage.removeItem('authToken')
        dispatch(setLoginState({
            isLogin: false,
            employeeName: '',
            authToken: ''
        }))
    }
}

export default useHandleLogout