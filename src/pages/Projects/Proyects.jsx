import './Projects.css'
import React from 'react';
import ProjectJSON from './projects.json';
import Lorem from './lorem.jsx';
import FooterEN from '../../components/en/FooterEN.jsx';
import FooterES from '../../components/es/FooterES.jsx';
import FooterDE from '../../components/de/FooterDE.jsx';
import useStore from '../../components/useStore.js';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Proyects() {
    const language = useStore((state) => state.language);
    const [active, setActive] = useState("a");
    const [visible, setVisible] = useState("visible");
    useEffect(() => {
        switch (active) {
            case "a":
                setContenidoAMostrar(ProjectJSON[0]);
                break;
            case "b":
                switch (language) {
                    case 'EN': setContenidoAMostrar(ProjectJSON[0]); break;
                    case 'ES': setContenidoAMostrar(ProjectJSON[1]); break;
                    case 'DE': setContenidoAMostrar(ProjectJSON[2]); break;
                    default: setContenidoAMostrar(ProjectJSON[0]); break;
                }
                break;
            case "c":
                switch (language) {
                    case 'EN': setContenidoAMostrar(ProjectJSON[3]); break;
                    case 'ES': setContenidoAMostrar(ProjectJSON[4]); break;
                    case 'DE': setContenidoAMostrar(ProjectJSON[5]); break;
                    default: setContenidoAMostrar(ProjectJSON[3]); break;
                }
                break;
            default:
                setContenidoAMostrar(ProjectJSON[0]);
                break;
        }
    }, [active, language]);

    const footerLanguage = () => {
        switch (language) {
            case 'EN': return <FooterEN />;
            case 'ES': return <FooterES />
            case 'DE': return <FooterDE />;
            default: return <FooterEN />;
        }
    }

    const titlesLanguage = () => {
        switch (language) {
            case 'EN': return (<>
                <h1 className={`titleProjects ${visible}`}>MY WORK</h1>
                <h2 className={`subtitleProjects ${visible}`}>Check out some of my projects...</h2>
            </>);
            case 'ES': return (<>
                <h1 className={`titleProjects ${visible}`}>MIS PROYECTOS</h1>
                <h2 className={`subtitleProjects ${visible}`}>Puede revisar algunos de mis proyectos...</h2>
            </>);
            case 'DE': return (<>
                <h1 className={`titleProjects ${visible}`}>MEINE PROJEKTE</h1>
                <h2 className={`subtitleProjects ${visible}`}>Sie können hier meine meisten Projekte sehen...</h2>
            </>);
            default: return <FooterEN />;
        }
    }       
    const [contenidoAMostrar, setContenidoAMostrar] = useState(ProjectJSON[0]);
    function handleClick() {
        switch (active) {
            case "a": setActive("b"); setVisible("hidden"); break;
            case "b": setActive("a"); setVisible("active");break;
            default: setActive("a"); setVisible("active");break;
        }
    }

    function handleClick2() {
        switch (active) {
            case "a": setActive("c"); setVisible("hidden"); break;
            case "c": setActive("a"); setVisible("active"); break;
            default: setActive("a"); setVisible("active");break;
            
        }
    }
    return (
        <>
            <section className="portfolioBox">
                {titlesLanguage()}
                <div className='andere'>
                    <div className="container">
                        <div className={`panel mapas ${active === "b" ? 'active' : "latir"}`} onClick={handleClick}>
                            <h3>Curiosity maps</h3>
                            <div className='lorem'>{active==="b"&&<Lorem {...contenidoAMostrar}/>}</div>
                        </div>
                        
                        <div className={`panel cartas ${active === "c" ? 'active' : 'latir'}`} onClick={handleClick2}>
                            <h3>Myth Cards Game</h3>
                            <div className='lorem'>{active==="c"&&<Lorem {...contenidoAMostrar}/>}</div>
                        </div>
                        
                    </div>
                    
                </div>
                
                {footerLanguage()}
            </section>
        </>
    );
};