import ProjectList from '../components/ProjectsList'
import './Projects.css'

export default function Proyects() {


    return (
        <section className="portfolioBox">
            <h1 className="title">MY WORK</h1>
            <div className="subtitle">
                <h2>Check out some of my projects...</h2>
                <div className="underline"></div>
            </div>
            <ProjectList />
        </section>
    );
};