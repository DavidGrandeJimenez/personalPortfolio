import '../en/AboutCard.css'
import foto from '../../assets/fotoDefinitiva2.png'

const AboutCard = () => {
    return (
        <section className="aboutBox">
            <h2 className="titleAboutCard">Wer bin ich?</h2>
            <div className="textAboutCard">
                <p className='ParagAboutCard' style={{padding:'0.7rem'}}>
                    Effizienter Front-End Developer mit vielen kreativen Ideen und Interesse daran, Teil von Projekten mit professionellen Partnern zu sein.
                </p>
                <p className='ParagAboutCard' style={{padding:'0.7rem'}}>
                    Disziplinierte Person, sehr kooperativ in der Teamarbeit. Fähigkeiten und Verständnis von HTML, JavaScript, React und anderen Technologien. Ich kann neue Technologien schnell lernen.

                </p>
                <p className='ParagAboutCard' style={{padding:'0.7rem'}}>Ein ruhiger Junge mit großer Neugier, um neue Dinge zu lernen. Ich möchte in Projekte mit positiven Menschen arbeiten.</p>

                <img src={foto} alt='foto David' style={{ height: '53vh', width: '13vw', marginLeft: '32%', borderRadius: '20px', marginBottom: '2%', marginTop: '1%', boxShadow: '5px -2px 8px rgba(0, 0, 0, 0.5)' }}></img>
            </div>
        </section>
    );
};

export default AboutCard;