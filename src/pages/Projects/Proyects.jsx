import './Projects.css'
import ProjectList from '../../components/ProjectsList'
import { useState, useEffect } from 'react';

export default function Proyects() {
    const [stylesheet, setStylesheet] = useState("");
    /*useEffect(() => {
        setStylesheet(<link
            rel="stylesheet"
            type='text/css'
            href='./src/pages/Projects/Projects.css'
        />)

    }, [])*/

    return (
        <>
            {stylesheet}
            <section className="portfolioBox">
                <h1 className="titleProjects">MY WORK</h1>
                <h2 className="subtitleProjects">Check out some of my projects...</h2>
                <ProjectList />
            </section>
        </>
    );
};