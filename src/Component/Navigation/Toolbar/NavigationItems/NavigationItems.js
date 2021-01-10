import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
import {Link} from 'react-router-dom'

function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
<NavigationItem   >
    <Link to='/' active>Burger Builder</Link>
</NavigationItem>
<NavigationItem>
    <Link to='/checkout' >CheckOut</Link>
</NavigationItem>
{/* <Link to='/' active >Burger Builder</Link>
<Link to='/checkout' >CheckOut</Link> */}
        </ul>
    )
}

export default NavigationItems
