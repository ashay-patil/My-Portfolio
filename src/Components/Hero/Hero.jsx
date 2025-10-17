import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import myResume from '../../assets/Ashay_Patil_Resume.pdf'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <div className="space-adjust"></div>
            <img src={profile_img} alt="" />
            <h1><span>I am Ashay Patil,</span> full-stack Developer Studying in VIT Pune</h1>
            <p>I have hands on experience in creating full fledged MERN stack applications</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={myResume} download="AshayPatilResume.pdf">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;