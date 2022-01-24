//src/store/loginStateSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: localStorage.getItem('isLogin') ?? false,
    authToken: localStorage.getItem('authToken') ?? '',
    employeeName: localStorage.getItem('employeeName') ?? ''
}

const loginStateSlice = createSlice({
    name: 'loginState',
    initialState,
    reducers: {
        setLoginState: (state, action) => action.payload
    }
})

export default loginStateSlice.reducer
export const { setLoginState } = loginStateSlice.actions