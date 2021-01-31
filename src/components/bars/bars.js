import React, { useState } from 'react';
import classes from '../../convertion/App.css';
import { FaBars } from 'react-icons/fa';

const bars = props =>{
    

    return(
        <div className={classes.bars} onClick={props.click}>
            <FaBars className={classes.bars__line}/>
        </div>
    )
}

export default bars;