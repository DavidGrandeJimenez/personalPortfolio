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
                <p className='ParagAboutCard'>Just a calm boy with great curiosity of learning new things.</p>
                <p className='ParagAboutCard'>
                    Interested in working on projects with positive people.
                </p>
                <img src={foto} alt='foto David' style={{height:'50vh',width:'10.8vw', marginLeft:'35%', borderRadius:'20px', marginBottom:'5%', marginTop:'-10%'}}></img>
            </div>
        </section>
    );
};

export default AboutCard;