import educationIcon from "../../assets/education.png";
import certificatesIcon from "../../assets/certificates.png";
import dotSeparator from "../../assets/dot.png";
import cello from '../../assets/cello.png';
import cat from '../../assets/cat.png';
import metal from '../../assets/metal.png';
import uk from '../../assets/uk.png'
import spain from '../../assets/spain.png'
import germany from '../../assets/germany.png'

import './Resume.css'


const Resume = () => {
    return (
        <section className="resume">
            <h2 className="titleResume">Resume</h2>
            <div className="grid-2">
                <div className="sec-experience">
                    <article className="resume-item">
                        <div className="resume-subtitle">
                            <img src={educationIcon} alt="education icon" />
                            <h3 className='titleApartado'>Education</h3>
                        </div>
                        <div className="content">
                            <div className="left-side">
                                <div className="edu-info">
                                    <p>Sep 2023 - On going</p>
                                    <span>Linkia FP</span>
                                </div>
                            </div>
                            <div className="middle">
                                <span className="dot-separator">
                                    <img src={dotSeparator} alt="separator" />
                                </span>
                            </div>
                            <div className="right-side">
                                <p>Grado Superior in Web Apps Development</p>
                            </div>
                        </div>
                    </article>
                    <article className="resume-item">
                        <div className="resume-subtitle">
                            <img src={certificatesIcon} alt="certification icon" />
                            <h3 className='titleApartado'>Certifications</h3>
                        </div>
                        <div className="content">
                            <div className="left-side">
                                <div className="edu-info">
                                    <p>Nov 2023</p>
                                    <span>Google</span>
                                </div>
                                <div className="edu-info">
                                    <p>Dec 2023</p>
                                    <span>EOI & Google</span>
                                </div>
                                <div className="edu-info">
                                    <p>Oct 2023 - Jan 2024</p>
                                    <span>freeCodeCamp</span>
                                </div>
                                <div className="edu-info">
                                    <p>Mar 2024</p>
                                    <span>freeCodeCamp</span>
                                </div>
                            </div>
                            <div className="middle">
                                <span className="dot-separator" >
                                    <img src={dotSeparator} alt="separator" />
                                </span>
                                <span className="dot-separator">
                                    <img src={dotSeparator} alt="separator" />
                                </span>
                                <span className="dot-separator">
                                    <img src={dotSeparator} alt="separator" />
                                </span>
                                <span className="dot-separator">
                                    <img src={dotSeparator} alt="separator" />
                                </span>
                            </div>
                            <div className="right-side">
                                <p>
                                    <a
                                        href="https://analytics.google.com/analytics/web"
                                        target="_blank"
                                    >
                                        Certification Google Analytics 4
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://skillshop.exceedlms.com/student/collection/786255-cloud-computing"
                                        target="_blank"
                                    >
                                        Basic Certification Cloud Computing
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://www.freecodecamp.org/certification/davidgrandewebs/responsive-web-design"
                                        target="_blank"
                                    >
                                        Responsive Web Design with HTML/CSS
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://freecodecamp.org/certification/davidgrandewebs/javascript-algorithms-and-data-structures-v8"
                                        target="_blank"
                                    >
                                        JavaScript Algorithms and Data Structures with JavaScrip Vanilla
                                    </a>
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="sec-skills">
                    <article className="skill-itemA skill-item">
                        <h3 className='titleApartado'>Web Coding Skills</h3>
                        <div className="skill-slider">
                            <div className="slider">
                                <p>HTML/CSS</p>
                                <input
                                    className="slide"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="85"
                                    readOnly
                                />
                            </div>
                            <div className="slider">
                                <p>JavaScript</p>
                                <input
                                    className="slide"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="70"
                                    readOnly
                                />
                            </div>
                            <div className="slider">
                                <p>React</p>
                                <input
                                    className="slide"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="60"
                                    readOnly
                                />
                            </div>
                            <div className="slider">
                                <p>Zustand</p>
                                <input
                                    className="slide"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="35"
                                    readOnly
                                />
                            </div>
                        </div>
                    </article>
                    <article className="skill-item skill-itemB">
                        <h3 className='titleApartado'>Other Coding Skills</h3>
                        <div className="skill-slider">
                            <div className="slider">
                                <p>Git</p>
                                <input
                                    className="slide"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="60"
                                    readOnly
                                />
                            </div>
                            <div className="slider">
                                <p>Python</p>
                                <input
                                    className="slide"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="50"
                                    readOnly
                                />
                            </div>
                            <div className="slider">
                                <p>Java</p>
                                <input
                                    className="slide"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="50"
                                    readOnly
                                />
                            </div>
                            <div className="slider">
                                <p>SQL</p>
                                <input
                                    className="slide"
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="5"
                                    value="40"
                                    readOnly
                                />
                            </div>
                        </div>
                    </article>
                </div>
                <div className="socialSkills">
                    <article className="socialItem">
                        <h3 className='titleApartado'>Social Skills</h3>
                        <div className="socialTag">
                            <span>Responsability</span>
                            <span>Learn Quickly</span>
                            <span>Curiosity</span>
                            <span>Tranquility</span>
                            <span>Friendly</span>
                            <span>Patience</span>
                            <span>Flexibility</span>
                            <span>Communication</span>
                            <span>Teamwork</span>
                        </div>
                    </article>

                    <article className="socialItem">
                        <h3 className='titleApartado hobbiesTitle'>Hobbies</h3>
                        <div className="hobbies-grid">
                            <img src={cat} alt="cat icon" />
                            <img src={metal} alt="metal icon" />
                            <img src={cello} alt="cello icon" />
                        </div>
                    </article>
                    <article className="socialItem">
                        <h3 className='titleApartado languageTitle'>Languages</h3>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><img src={spain} alt='spain flag' className="bandera"></img><strong>Spanish</strong>  - Native</li>
                            <li><img src={uk} alt='spain flag' className="bandera"></img><strong>English</strong> - B2</li>
                            <li style={{marginBottom:'8vh'}}><img src={germany} alt='spain flag' className="bandera"></img><strong>German</strong> - B1</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Resume;