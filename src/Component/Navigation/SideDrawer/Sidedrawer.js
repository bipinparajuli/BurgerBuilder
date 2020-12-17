import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/Toolbar/NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../Burger/UI/Backdrop/Backdrop'
// import Aux from '../../hoc/Aux'

function Sidedrawer(props) {
let attachedClass=[classes.SideDrawer,classes.Close]
if(props.open){
    attachedClass=[classes.SideDrawer,classes.Open]
}
    return (
        <>
            <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClass.join(' ')}>
            <div className={classes.Logo}>
        <Logo />
        </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </>
    )
}

export default Sidedrawer
