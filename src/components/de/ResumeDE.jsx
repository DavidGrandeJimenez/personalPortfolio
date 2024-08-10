import educationIcon from "../../assets/education.png";
import certificatesIcon from "../../assets/certificates.png";
import dotSeparator from "../../assets/dot.png";
import cello from '../../assets/cello.png';
import cat from '../../assets/cat.png';
import metal from '../../assets/metal.png';
import uk from '../../assets/uk.png'
import spain from '../../assets/spain.png'
import germany from '../../assets/germany.png'

import '../en/Resume.css'

const Certificate = ({ date, organization, link, nameCertificate }) => {
    return (
        <div className="edu-info">
            <p>{date}<br /><span className='organization' >{organization}</span></p>
            <img src={dotSeparator} alt="separator" className="dot-separator" />
            <p>
                <a className='certificate'
                    href={link}
                    target="_blank"
                >
                    {nameCertificate}
                </a>
            </p>
        </div>
    )
}

const Resume = () => {
    return (
        <section className="resume">
            <h2 className="titleResume" style={{ fontSize: '1.5rem' }}>Zusammenfassung</h2>
            <div className="grid-2">
                <div className="sec-experience">
                    <article className="resume-item">
                        <div className="resume-subtitle">
                            <img src={educationIcon} alt="education icon" />
                            <h3 className='titleApartado'>Ausbildung</h3>
                        </div>
                        <div className="content">
                            <Certificate date='Sep 2023 - Aktuell' organization='Linkia FP' link='https://linkiafp.es/fp-grado-superior-desarrollo-de-aplicaciones-web-a-distancia/' nameCertificate='Grado Superior in Web Apps Development' />
                        </div>
                    </article>
                    <article className="resume-item">
                        <div className="resume-subtitle">
                            <img src={certificatesIcon} alt="certification icon" />
                            <h3 className='titleApartado'>Zertifikate</h3>
                        </div>
                        <div className="content">
                            <Certificate date='Nov 2023' organization='Google' link='https://analytics.google.com/analytics/web' nameCertificate='Zertifikat Google Analytics 4' />

                            <Certificate date='Dec 2023' organization='EOI & Google' link='https://skillshop.exceedlms.com/student/collection/786255-cloud-computing' nameCertificate='Grundzertifikat Cloud Computing' />

                            <Certificate date='Oct 2023 - Jan 2024' organization='freeCodeCamp' link='https://www.freecodecamp.org/certification/davidgrandewebs/responsive-web-design' nameCertificate='Responsive Web Design mit HTML/CSS' />

                            <Certificate date='Jan 2024 - Mär 2024' organization='freeCodeCamp' link='https://freecodecamp.org/certification/davidgrandewebs/javascript-algorithms-and-data-structures-v8' nameCertificate='JavaScript Algorithms und Data Structures mit JavaScrip Vanilla' />

                            <Certificate date='Mär 2024 - Jul 2024' organization='Meta & Coursera' link='https://coursera.org/verify/professional-cert/DTO9SEBFEIP6' nameCertificate='Meta Front-End Developer Professional Certificate' />

                        </div>
                    </article>
                </div>
                <div className="sec-skills">
                    <article className="skill-item skill-itemA">
                        <h3 className='titleApartado'>Web Fähigkeiten</h3>
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
                        <h3 className='titleApartado' style={{ marginTop: '10vh' }}>Andere Fähigkeiten</h3>
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
                        <h3 className='titleApartado'>soziale Fähigkeiten</h3>
                        <div className="socialTag">
                            <span>Schnelles Lernen</span>
                            <span>neugierig</span>
                            <span>ruhig</span>
                            <span>freundlich</span>
                            <span>geduld</span>
                            <span>Flexibilität</span>
                            <span>Kommunikation</span>
                            <span>Teamarbeit</span>
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
                        <h3 className='titleApartado languageTitle'>Sprachen</h3>
                        <ul style={{ listStyleType: 'none' }}>
                            <li><img src={spain} alt='spain flag' className="bandera"></img><strong>Spanisch</strong>  - Müttersprache</li>
                            <li><img src={uk} alt='spain flag' className="bandera"></img><strong>Englisch</strong> - B2</li>
                            <li style={{ marginBottom: '8vh' }}><img src={germany} alt='spain flag' className="bandera"></img><strong>Deutsch</strong> - B1</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Resume;