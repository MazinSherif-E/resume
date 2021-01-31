import React from 'react';
import classes from '../../convertion/App.css';

const about = props =>{

    return(
        <div className={classes.info} id="about">
                <div className={classes.info__about}>
                    <h2 className={classes.info__header}>ABOUT ME</h2>
                    <div className={classes.info__line}></div>
                    <p className={classes.info__text}>
                        Hey! My name is Mazin Sherif and I'm a web developer with a passion for front end development and design I'm currently a second year at <b> Minia University</b> pursuing a degree in computer scince. I aspire toward a career that allow me to channel my creativity through crafting beatuiful software and engaging experiences.  
                     </p>
                </div>
                <div className={classes.info__experience}>
                    <h2 className={classes.info__header}>EXPERIENCE</h2>
                    <div className={classes.info__line}></div>
                    <p className={classes.info__text}>
                    -I have +1 exprerience in this field specially in developing and designing websites, and I'm always eager to learn more in this fast paced industry.<br></br>
                    {/* Be a strong individual contributer while also being a team player. */}
                    -Test sites and applications in different browsers and environments.<br></br>
                    {/* Self-Driven to keep current with latest web technologies. */}
                    -Fix bugs in existing projects.<br></br>-Build and test Application Program Interfaces (APIs) for applications to exchange data.  
                    </p>
                </div>
            </div>
    )
}
export default about;