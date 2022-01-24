//src/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import loginStateSlice from './loginStateSlice'

const store = configureStore({
    reducer: {
        loginStateSlice,
    }
})

export default store