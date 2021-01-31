import React, { useState, useEffect } from 'react';
import classes from '../../convertion/App.css';
import { Link } from 'react-scroll';
import resume from '../../abstract/resume.pdf';
import Aos from 'aos';
import 'aos/dist/aos.css';

const header = props =>{
    const [navBar, setNavBar] = useState(false)

    const changeBackground = ()=> {
        if(window.scrollY >= 200) {
            setNavBar(true);
        }else{
            setNavBar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    let classname = [classes.header, classes.headerNonColor].join(' ');
    if(navBar){
        classname = [classes.header, classes.headerBlackColor].join(' ');
    }
    return(
        <div className={classname} >
                {/* <a target="_black" href='https://www.google.com' >header asdflkka</a>
                <a target="_black" href={pdf} >header asdflkka</a> */}

            <a target="_blank" href={resume} className={classes.header__resume} data-aos="fade-down" data-aos-duration="1000">
                Download Full Resume
            </a>
            <div className={classes.header__links} data-aos="fade-down" data-aos-duration="1000">
                <Link className={classes.header__link} to="about" duration={700} smooth={true}>About & Experience</Link>
                <Link className={classes.header__link} to="lang" duration={700} smooth={true}>Languages</Link>
                <Link className={classes.header__link} to="projects" duration={700} smooth={true}>Projects</Link>
                <Link className={classes.header__link} to="id" duration={700} smooth={true}>QickId</Link>
            </div>
        </div>
    )
    
}
export default header;