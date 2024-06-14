import ProfileCard from "../components/ProfileCard.jsx";
import AboutCard from "../components/AboutCard.jsx";
import Resume from '../components/Resume.jsx';
import Grid from '@mui/material/Grid';
import './About.css'


export default function About() {
    return (
        <>
            <main className='backgroundAbout'>
                <Grid container spacing={5} justify="center" alignItems="center">
                    <Grid item lg={6}>
                        <ProfileCard />
                    </Grid>
                    <Grid item lg={6}>
                        <AboutCard />
                    </Grid>
                </Grid >
                <Resume />
            </main>
        </>
    );
}