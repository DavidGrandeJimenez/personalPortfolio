import './Projects.css'
import ProjectList from '../../components/ProjectsList'

export default function Proyects() {
    return (
        <>
            <section className="portfolioBox">
                <h1 className="titleProjects">MY WORK</h1>
                <h2 className="subtitleProjects">Check out some of my projects...</h2>
                <ProjectList />
            </section>
        </>
    );
};