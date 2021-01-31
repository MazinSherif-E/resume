import React from 'react';
import classes from '../../convertion/App.css';

const id = props =>(
    <div className={classes.id} id="id">
        <div className={classes.id__header}>
            <h2>QICK ID</h2>
            <div className={classes.info__line}></div>
        </div>
        <div className={classes.id__content}>
            <div className={classes.id__info}>
                <b className={classes.id__subHeader}>Phone</b>
                <p>+201098347669</p>
            </div>
            <div className={classes.id__info}>
                <b className={classes.id__subHeader}>Email</b>
                <p>mazin.sherif100@gmail.com</p>
            </div>
            <div className={classes.id__info}>
                <b className={classes.id__subHeader}>Address</b>
                <p>New Minia, Minia Egypt</p>
            </div>

        </div>
    </div>
)
export default id;