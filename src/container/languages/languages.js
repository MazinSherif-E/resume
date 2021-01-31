import React from 'react';
import classes from '../../convertion/App.css';
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3 } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io';
import { SiPostgresql } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { SiPython } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const languages = props =>(
    <div className={classes.languages} id="lang">
        <div className={classes.languages__header1}>
            <h2>LANGUAGES</h2>
            <div className={classes.info__line}></div>
        </div>
        <div className={classes.languages__grid}>
            <div className={classes.languages__grid__html}>Html<ImHtmlFive className={classes.languages__grid__htmlicon}/></div>
            <div className={classes.languages__grid__css}>css <SiCss3 className={classes.languages__grid__cssicon}/> </div>
            <div className={classes.languages__grid__sass}><IoLogoSass className={classes.languages__grid__sassicon}/></div>
            <div className={classes.languages__grid__java}><IoLogoJavascript className={classes.languages__grid__javaicon}/>JavaScript</div>
            <div className={classes.languages__grid__sql}><SiPostgresql className={classes.languages__grid__sqlicon}/>postgreSQL</div>
            <div className={classes.languages__grid__react}>
                <GrReactjs className={classes.languages__grid__reacticon}/>
                <b>React</b>
                <p>(Hooks - Http Ajax -</p>
                <p>Axios - Redux -</p> 
                <p>authentication)</p> 
            </div>
        </div>
        <div className={classes.languages__header2}>
            <h2>Some Other</h2>
            <div className={classes.info__line}></div>
        </div>
        <div className={classes.languages__other}>
            <div className={classes.languages__other__content}>
                <SiPython className={classes.languages__other__pythonIcon}/>
                <FaJava className={classes.languages__other__javaIcon}/>
                <div className={classes.languages__other__c}>C++</div>
            </div>
        </div>
    </div>
)

export default languages;