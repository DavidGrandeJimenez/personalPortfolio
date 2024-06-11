import data from './ProyectsData.js'
import './ProjectsList.css'
const ProjectList = () => {

    return (
        <>
            <article className="list-projects">
                {data.map((cada) => {
                    return (
                        <div key={cada.id}>
                            <div style={{backgroundColor:'lightgreen'}} className='project-card'>
                                <div style={{backgroundColor:'lightblue'}} className="img-zoom">
                                    <img style={{height: '200px', width:'500px'}}
                                        src={cada.cover}
                                        alt={cada.title}
                                    />
                                </div>

                                <h3>{cada.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </article>
        </>
    )

}

export default ProjectList;