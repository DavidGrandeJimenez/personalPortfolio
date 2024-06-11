import ProjectList from '../components/ProjectsList'

export default function Proyects() {


    return (
        <section className="portfolio-box">
            <h1 className="title">My Work</h1>
            <div className="subtitle">
                <h2>Check out some of my projects...</h2>
                <div className="underline"></div>
            </div>
            <ProjectList />
        </section>
    );
};