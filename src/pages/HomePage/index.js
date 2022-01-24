//src/pages/HomePage/index.js
import { useSelector } from 'react-redux'
import Header from "../../components/Header"
import Content from '../../components/Content'
import Footer from '../../components/Footer'

function Home() {
    const isLogin = useSelector(state => state.loginStateSlice.isLogin)

    return (
        <>
            <Header/>
            {isLogin && <Content/>}
            <Footer/>
        </>
    )
}

export default Home