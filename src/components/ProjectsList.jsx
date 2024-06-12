import data from './ProyectsData.js'
import './ProjectsList.css'
import Grid from '@mui/material/Grid';

const ProjectList = () => {

    return (
        <>
            <article className="list-projects">
                <Grid container spacing={5} justify="center" alignItems="center">
                    {data.map((cada) => {
                        return (
                            <Grid item lg={4} key={cada.id}>
                                <div className='project-card'>
                                    <div className="img-zoom">
                                        <img style={{ height: '200px', width: '500px' }}
                                            src={cada.cover}
                                            alt={cada.title}
                                        />
                                    </div>
                                    <h3>{cada.title}</h3>
                                </div>
                            </Grid>
                        )
                    })}
                   </Grid >
            </article>

        </>
    )

}

export default ProjectList;