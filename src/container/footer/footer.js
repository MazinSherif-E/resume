import React from 'react';
import classes from '../../convertion/App.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { FaGithubSquare } from 'react-icons/fa';
import resume from '../../abstract/resume.pdf';

const footer = props =>(
    <div className={classes.footer}>
        <div className={classes.footer__content}>
            <a target="_blank" href={resume} className={classes.footer__resume} >
                    Download Full Resume
            </a>
            <div className={classes.footer__social}>
                <div className={classes.footer__icons}>
                    <a target="_blank" href="https://www.facebook.com/mazin.sherif.1" className={classes.footer__face}><FaFacebookSquare /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/mazin-sherif-5168301a4/" className={classes.footer__linked}><SiLinkedin /></a>
                    <a target="_blank" href="https://github.com/MazinSherif-E" className={classes.footer__git}><FaGithubSquare /></a>
                </div>
                <p>Follow me in social network</p>
            </div>
        </div>
    </div>
)

export default footer;