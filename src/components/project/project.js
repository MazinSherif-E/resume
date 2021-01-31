import React from 'react';
import classes from '../../convertion/App.css';
import { GiMagnifyingGlass } from 'react-icons/gi';

const project = props =>(
    <a target="_black" href={props.link} className={classes.projects__link}>
        <img src={props.img} alt="photo" className={classes.projects__img}/> 
        <div className={classes.projects__view}>
            <GiMagnifyingGlass className={classes.projects__view__glass}/>
            <p className={classes.projects__view__word}>{props.caption}</p>
        </div>
    </a>
);

export default project;