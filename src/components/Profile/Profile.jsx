import { FaGithub, FaYoutube, FaLinkedin} from 'react-icons/fa6'
import './Profile.css'


const Profile = () => {
  return (
    <div className="profile">
        <h1 className="name">Alex Lee</h1>
            <p className="small-desc">
                I code sometimes and try to make the world better.
                <br/>
                Junior Software Engineer.
            </p>
            <div className="logos">
                <a href = "https://github.com/alexlee39" className = "github logos-items">
                    <FaGithub/>
                </a>
                {/* <!-- Linkedin --> */}
                <a href="www.linkedin.com/in/alexander-lee-855a96236" className="linkedin logos-items">
                    <FaLinkedin/>
                </a>
                {/* <!-- Youtube --> */} 
                <a href="#" className="youtube logos-items">
                    <FaYoutube/>
                </a>

            </div>

            <div className="resume-section">
                <a className="resume" href="../resume/Software/Resume.pdf"> Resume</a>                    
            </div>

            <nav className="table-of-contents">
                <div className="about-section">
                    <a href="#about"> About</a>
                </div>
                <div className="experience-section">
                    <a href="#experience"> Experience</a>
                </div>
                <div className="other-works-section">
                    <a href="#other-works" > Other Works</a>
                </div>
            </nav>
    </div>
  )
}

export default Profile