import './Projects.css'
import ProjectList from '../../components/en/ProjectsListEN.jsx'
import FooterEN from '../../components/en/FooterEN.jsx';
import FooterES from '../../components/es/FooterES.jsx';
import FooterDE from '../../components/de/FooterDE.jsx';
import useStore from '../../components/useStore.js';

export default function Proyects() {
    const language = useStore((state) => state.language);

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
                <h1 className="titleProjects">MY WORK</h1>
                <h2 className="subtitleProjects">Check out some of my projects...</h2>
            </>);
            case 'ES': return (<>
                <h1 className="titleProjects">MIS PROYECTOS</h1>
                <h2 className="subtitleProjects">Puede revisar algunos de mis proyectos...</h2>
            </>);
            case 'DE': return (<>
                <h1 className="titleProjects">MEINE PROJEKTE</h1>
                <h2 className="subtitleProjects">Sie können hier meine meisten Projekte sehen...</h2>
            </>);
            default: return <FooterEN />;
        }
    }

    return (
        <>
            <section className="portfolioBox">
                {titlesLanguage()}
                <ProjectList />

                {footerLanguage()}
            </section>
        </>
    );
};