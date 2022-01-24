//src/components/Footer/index.js
import './Footer.css'

function Footer() {

    return (
        <div className="footer" >
            <footer>
                <div className="name">
                    Automation Research and Training Center SISTRAIN
                </div>
                <div className="contactContainer">
                    <div className="contact">
                        <div>
                            Loaction: 367/2 Hoa Hao, W.5, D.10, Ho Chi Minh City
                        </div>
                        <div>Email: sistrain@sistech.com.vn</div>
                        <div>Phone: 093 411 18 41</div>
                    </div>
                    <div>
                        <a href="http://www.sistrain.com"
                            target="blank" >Website |</a>
                        <a 
                            href="https://www.youtube.com/channel/UCZlv_mk1VFnno-I3ciZO-ng"
                            target="blank" >| Youtube |</a>
                        <a href="https://www.facebook.com/SistrainCenter"
                            target="blank" >| Facebook</a>
                    </div>
                </div>
                <div className="coppyright">
                    Copyright &copy;2021 by Sistrain software development team
                </div>
            </footer>
        </div>
    )
}

export default Footer