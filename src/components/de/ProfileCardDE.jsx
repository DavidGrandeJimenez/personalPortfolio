// Social Icons
import linkedin from "../../assets/linkedin-color.png";
import github from "../../assets/github-dark.png";

// Contact Icons
import mobile from "../../assets/mobile.png";
import mail from "../../assets/mail-color.png";
import webPage from "../../assets/web-color.png";
import location from "../../assets/location-color.png";
import download from "../../assets/download.png";
import perfil from '../../assets/perfil.jpg';

import '../en/ProfileCard.css'

const ProfileCard = () => {
    return (
        <section id="profile-card" className="profileCardContainer">
            <article className="profile-card">
                <div className="profile-img">
                    <img src={perfil} alt="David Grande" />
                </div>
                <h1 className="display-name">David Grande Jiménez</h1>
                <h2 className="career-title">Web Developer</h2>
                <div className="social">
                    <a href="https://www.linkedin.com/in/aleksandra-chirtoska/" target="_blank">
                        <img src={linkedin} alt="LinkedIn icon" className="imageProfileCard" />
                    </a>
                    <a href="https://github.com/DavidGrandeJimenez" target="_blank">
                        <img src={github} alt="Github icon" />
                    </a>
                </div>
                <div className="contact-info">
                    <p className="contact-item">
                        <img src={mobile} alt="mobile icon" />
                        <a href="tel:+34608966808">+34 608966808</a>
                    </p>
                    <p className="contact-item">
                        <img src={mail} alt="mail icon" />
                        <a href="mailto:davidgrandewebs@gmail.com">davidgrandewebs@gmail.com</a>
                    </p>
                    <p className="contact-item">
                        <img src={webPage} alt="web icon" />
                        <a href="https://davidgrande.pages.dev/" target="_blank">
                            davidgrande.pages.dev
                        </a>
                    </p>
                    <p className="contact-item">
                        <img src={location} alt="location icon" />
                        <span style={{color: '#343a40'}}>Madrid, Spanien</span>
                    </p>
                </div>
                <div className="download-resume">
                    <a
                        href="https://aleksandrachirtoska.com/files/Resume-Aleksandra-Chirtoska-jan23.pdf"
                        target="_blank"
                        className="download-btn"
                    >
                        <img src={download} alt="download resume" /> CV Herunterladen
                    </a>
                </div>
            </article>
        </section>
    );
};

export default ProfileCard;