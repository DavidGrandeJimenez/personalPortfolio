import '../en/AboutCard.css'
import foto from '../../assets/fotoDefinitiva2.png'

const AboutCard = () => {
    return (
        <section className="aboutBox">
            <h2 className="titleAboutCard">Sobre mí</h2>
            <div className="textAboutCard">
                <p className='ParagAboutCard'>
                    Soy un Front-End Developer responsable y eficiente, con muchas ideas creativas e interesado en formar parte de proyectos con gente profesional.
                </p>
                <p className='ParagAboutCard'>
                    Habiendo estudiado y programado por varios años, tengo un buen rendimiento y disciplina, a la vez que soy muy colaborativo y amable trabajando en equipo. Con habilidades y conocimiento de diversas tecnologías web, como HTML, JavaScript y React, entre otras. Aún así, estoy siempre abierto a aprender nuevas destrezas.
                </p>
                <p className='ParagAboutCard'>Simplemente soy un chico tranquilo, pero con una gran curiosidad en aprender nuevas cosas, así commo interesado en trabajar rodeado de gente positiva.</p>

                <img src={foto} alt='foto David' style={{ height: '53vh', width: '13vw', marginLeft: '32%', borderRadius: '20px', marginBottom: '2%', marginTop: '1%', boxShadow: '5px -2px 8px rgba(0, 0, 0, 0.5)'}}></img>
            </div>
        </section>
    );
};

export default AboutCard;