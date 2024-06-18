import data from './ProyectsData.js'
import './ProjectsList.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ProjectList = () => {

    return (
        <>
            <article className="list-projects">
                <Grid container spacing={5} justify="center" alignItems="center">
                    {data.map((cada) => {
                        return (
                            <Grid item lg={4} md={4} sm={6} xs={12} key={cada.id} >
                                <Box className='project-card' sx={{height:{lg:'50vh', md:'20vh', sm:'25vh', xs:'35vh'}}}>
                                    <div className="img-zoom">
                                        <a href={cada.liveUrl} target='_blank'>
                                            <img className="image"
                                                src={cada.cover}
                                                alt={cada.title}
                                            /></a>
                                    </div>
                                    <h3 className="titleImage">{cada.title}</h3>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid >
            </article>

        </>
    )

}

export default ProjectList;