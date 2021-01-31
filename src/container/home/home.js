import React, { useEffect, useState } from 'react';
import classes from '../../convertion/App.css';
import img from './workL.jpg'
import Header from '../header/header';
import mazinImg from '../../images/mazin.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from '../info/info';
import Languages from '../languages/languages';
import Projects from '../projects/projects';
import Id from '../id/id';
import Footer from '../footer/footer';
import Bars from '../../components/bars/bars';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

const home = props =>{
    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])

    const [nav, setNav] = useState(false);

    const navClickHandler = () =>{
        setNav(!nav);
    }

    let navItems = null;
    if(nav){
        navItems = (
            <div className={classes.nav} data-aos="fade-left" >
                <IoMdClose className={classes.nav__close} onClick={navClickHandler}/>
                <div className={classes.nav__links}>
                    <Link className={classes.nav__link} to="about" duration={700} smooth={true} onClick={navClickHandler}>About & Experience</Link>
                    <Link className={classes.nav__link} to="lang" duration={700} smooth={true} onClick={navClickHandler}>Languages</Link>
                    <Link className={classes.nav__link} to="projects" duration={700} smooth={true} onClick={navClickHandler}>Projects</Link>
                    <Link className={classes.nav__link} to="id" duration={700} smooth={true} onClick={navClickHandler}>QickId</Link>
                </div>
            </div>
        )
    } 

    return(
        <div className={classes.home}> 
            <img src={img} className={classes.home__img}/>
            <Bars click={navClickHandler}/>
            {navItems}
            <Header />            
            <div className={classes.home__nameJop}>
                <h1 className={classes.home__nameJop__name}>Mazin Sherif</h1>
                <h4 className={classes.home__nameJop__jop}>Web Developer</h4>
            </div>
            <img src={mazinImg} className={classes.home__mazImg} alt="photo" />

            <div className={classes.port}>
                <div className={classes.port__nameJop}>
                    <h1 className={classes.port__nameJop__name}>Mazin Sherif</h1>
                    <h4 className={classes.port__nameJop__jop}>Web Developer</h4>
                </div>
                <img src={mazinImg} className={classes.port__mazImg} alt="photo" />
            </div>

            <About/>
            <Languages/>
            <Projects/>
            <Id/>
            <Footer/>
        </div>
    )
}
export default home;