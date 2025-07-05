import './Footer.css'
import footer_logo from '../../assets/footer_logo.jpg'
import SocialLinks from './SocialLinks';

const Footer = ()=>{
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a Full Stack Web Developer from VIT Pune</p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© Ashay Patil. All rights reserved.</p>
                <div className="footer-bottom-right">
                    {/* <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect With Me</p> */}
                    <SocialLinks/>
                </div>

            </div>
        </div>
    )
}

export default Footer;