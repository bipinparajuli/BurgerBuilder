import React from 'react'
import classes from './BuildControl.module.css'


function BuildControl(props) {
    console.log(props.disabled)
    return (
        <div className={classes.BuildControl} >
            <div>{props.label}</div>
            <button className={classes.Less} onClick={props.deleted} disabled={props.disabled} >Less</button>
            <button className={classes.More}onClick={props.added} >More</button>
        </div>
    )
}

export default BuildControl
