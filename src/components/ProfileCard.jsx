// Social Icons
import linkedin from "../assets/linkedin-color.png";
import github from "../assets/github-dark.png";
//import profileImg from "../assets/profile-img.png";

// Contact Icons
import mobile from "../assets/mobile.png";
import mail from "../assets/mail-color.png";
import webPage from "../assets/web-color.png";
import location from "../assets/location-color.png";
import download from "../assets/download.png";

import './ProfileCard.css'

const ProfileCard = () => {
    return (
        <section id="profile-card" className="profileCardContainer">
            <article className="profile-card">
                <div className="profile-img">
                    <img src='https://avatars.githubusercontent.com/u/168454401?s=400&u=180c25b200fef4edfda6fd3c521be3d6615c656e&v=4' alt="David Grande" />
                </div>
                <h1 className="display-name">David Grande Jiménez</h1>
                <h2 className="career-title">Web Developer</h2>
                <div className="social">
                    <a href="https://www.linkedin.com/in/aleksandra-chirtoska/">
                        <img src={linkedin} alt="LinkedIn icon" className="imageProfileCard"/>
                    </a>
                    <a href="https://github.com/DavidGrandeJimenez">
                        <img src={github} alt="Github icon" />
                    </a>
                </div>
                <div className="contact-info">
                    <p className="contact-item">
                        <img src={mobile} alt="mobile icon" />
                        <a href="tel:+34608966808">+34608966808</a>
                    </p>
                    <p className="contact-item">
                        <img src={mail} alt="mail icon" />
                        <a href="mailto:davidgrandewebs@gmail.com">davidgrandewebs@gmail.com</a>
                    </p>
                    <p className="contact-item">
                        <img src={webPage} alt="web icon" />
                        <a href="https://aleksandrachirtoska.com">
                            davidgrandeportfolio.com
                        </a>
                    </p>
                    <p className="contact-item">
                        <img src={location} alt="location icon" />
                        <span style={{color: '#343a40'}}>Madrid, Spain</span>
                    </p>
                </div>
                <div className="download-resume">
                    <a
                        href="https://aleksandrachirtoska.com/files/Resume-Aleksandra-Chirtoska-jan23.pdf"
                        target="_blank"
                        className="download-btn"
                    >
                        <img src={download} alt="download resume" /> Download CV
                    </a>
                </div>
            </article>
        </section>
    );
};

export default ProfileCard;