import React, { useState } from 'react';
import classes from '../../convertion/App.css';
import img1 /*real-estate*/ from '../../images/randleClose.jpeg';
import img2 /*luggage*/ from '../../images/home.jpg';
import img3 /*natours*/ from '../../images/nat-1.jpg';
import img4 /*trillo*/ from '../../images/hotel-3.jpg'
import img5 /*burger*/ from '../../images/background.png'
import img6 /*nexter*/ from '../../images/hero.jpeg'
import Project from '../../components/project/project';

const projects = props =>{
    const [projects, setProjects] = useState({
        project1: {img: img1, name:"Real Estate", link:"https://real-estate-mazin.netlify.app/"},
        project2: {img: img2, name:"Luggage Store", link:"https://luggage-mazin.netlify.app"},
        project3: {img: img3, name:"Natours", link:"https://natours-project-m.herokuapp.com/"},
        project4: {img: img4, name:"Trillo", link:"https://trillo-project-m.herokuapp.com/"},
        project5: {img: img5, name:"Burger Builder", link:"https://burger-builder-mazin.herokuapp.com/"},
        project6: {img: img6, name:"Nexter", link:"https://nexter-project-m.herokuapp.com/"}
    })

    const projectsArray = [];
    for (let key in projects){
        projectsArray.push({
            id: key,
            project: projects[key]
        })
    }

    return(
        <div className={classes.projects} id="projects">
            <div className={classes.projects__header}>
                <h2>PROJECTS</h2>
                <div className={classes.info__line}></div>
            </div>
            <div className={classes.projects__images}>
                
                {projectsArray.map(item=>{
                    return(<Project link={item.project.link} img={item.project.img} caption={item.project.name}/>)
                })}
                        
            </div>
        </div>
    )
}
export default projects;