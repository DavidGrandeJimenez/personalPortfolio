import ProfileCardEN from "../../components/en/ProfileCardEN.jsx";
import AboutCardEN from "../../components/en/AboutCardEN.jsx";
import ResumeEN from '../../components/en/ResumeEN.jsx';

import ProfileCardES from "../../components/es/ProfileCardES.jsx";
import AboutCardES from "../../components/es/AboutCardES.jsx";
import ResumeES from '../../components/es/ResumeES.jsx';

import ProfileCardDE from "../../components/de/ProfileCardDE.jsx";
import AboutCardDE from "../../components/de/AboutCardDE.jsx";
import ResumeDE from '../../components/de/ResumeDE.jsx';

import Grid from '@mui/material/Grid';

import FooterEN from '../../components/en/FooterEN.jsx';
import FooterES from '../../components/es/FooterES.jsx';
import FooterDE from '../../components/de/FooterDE.jsx';

import useStore from '../../components/useStore.js';

import './About.css'



export default function About() {
    const language = useStore((state) => state.language);

const footerLanguage = () => {
    switch (language) {
        case 'EN': return <FooterEN />;
        case 'ES': return <FooterES />
        case 'DE': return <FooterDE />;
        default: return <FooterEN />;
    }
}

const gridContent = () => {
    switch (language) {
        case 'EN': return (<>
            <Grid container spacing={0} justify="center" alignItems="center">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ProfileCardEN />
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <AboutCardEN />
                </Grid>
            </Grid >
            <ResumeEN />
        </>);

        case 'ES': return (<>
            <Grid container spacing={5} justify="center" alignItems="center">
                <Grid item lg={6}>
                    <ProfileCardES />
                </Grid>
                <Grid item lg={6}>
                    <AboutCardES />
                </Grid>
            </Grid >
            <ResumeES />
        </>);
        case 'DE': return (<>
            <Grid container spacing={0} justify="center" alignItems="center">
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <ProfileCardDE />
                </Grid>
                <Grid item lg={6}>
                    <AboutCardDE />
                </Grid>
            </Grid >
            <ResumeDE />
        </>);
    }
}
    return (
        <>
            <main className='backgroundAbout'>
                {gridContent()}
                {footerLanguage()}
            </main>
            
        </>
    );
}