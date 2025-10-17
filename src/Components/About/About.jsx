import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg';

const About = () => {
    return (
        <div id='about' className="about">
            <div className="space-adjust"></div>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                {/* <div className="about-left">
                    <img src={profile_img} alt="" />
                </div> */}
                <div className="about-right">
                    <div className="about-para">
                        <p>Experienced in developing full-stack applications using React.js, Node.js, MongoDB, and Express.js, handling authentication,
                            API design, and deployment pipelines with strong foundations in Data Structures, Algorithms, and Object-Oriented
                            Programming</p>
                        <p>Experienced in developing end-to-end scalable web applications using the MERN stack, RESTful APIs, and
                            version control (Git). Proven track record of working in collaborative environments and delivering real-world solutions
                            during hackathons and personal projects. Passionate about building secure, efficient, and user-friendly applications. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p><hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Node & Express JS</p><hr style={{width:"80%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Mongo DB</p><hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>MySQL</p><hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>DSA</p><hr style={{width:"80%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Hackathon</h1>
                    <p>Top 10 Finalist at Onelab Ventures Nationally</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>260+</h1>
                    <p>Leetcode Questions Solved</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>Projects</p>
                </div>
            </div>
        </div>
    )
}
export default About;