import React from 'react'
import burgerLogo from '../../Assets/Image/logo.png';
import classes from './Logo.module.css'

function Logo(props) {
    return (
        <div className={classes.Logo}style={{height:props.height}} >
     <img src={burgerLogo} alt='MyBurger' />       
        </div>
    )
}

export default Logo
