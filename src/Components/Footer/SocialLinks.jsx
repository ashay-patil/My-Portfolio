import './SocialLinks.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';


const SocailLinks = ()=>{
    return (
        <div className="sociallinks">
            <a href="https://www.github.com/ashay-patil">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/ashay-patil-164a17291">
                <FaLinkedin/>
            </a>
            <a href="https://www.leetcode.com/u/i_m_ashay_">
                <SiLeetcode/>
            </a>
        </div>
    )
}

export default SocailLinks;