import './AboutCard.css'
import foto from '../assets/fotoDefinitiva2.png'

const AboutCard = () => {
    return (
        <section className="aboutBox">
            <h2 className="titleAboutCard">About Me</h2>
            <div className="textAboutCard">
                <p className='ParagAboutCard'>
                    Responsible and efficient Front-End Developer with many creative ideas and interested in being part of projects with professional partners.
                </p>
                <p className='ParagAboutCard'>
                    Disciplined person, with good performance and very collaborative in team-working. Skills and understanding of HTML, CSS, JavaScript, React and other technologies. With ability to learn new skills quickly.
                </p>
                <p className='ParagAboutCard'>Just a calm boy with great curiosity of learning new things. Interested in working on projects with positive people.</p>

                <img src={foto} alt='foto David' style={{ height: '53vh', width: '13vw', marginLeft: '32%', borderRadius: '20px', marginBottom: '2%', marginTop: '1%', boxShadow: '5px -2px 8px rgba(0, 0, 0, 0.5)'}}></img>
            </div>
        </section>
    );
};

export default AboutCard;