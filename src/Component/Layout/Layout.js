import React,{useState} from 'react'
// import Aux from '../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer'


const Layout =(props)=> {
const [state, setState] = useState({
    showSideDrawer:true
})


const sideDrawerCloseHandler=()=>{
setState({showSideDrawer:false})

}
const sideDrawerToggle=()=>{
setState((prevState)=>{
    return {showSideDrawer:!prevState.showSideDrawer}
})
}
    {
    return (
        <>
            <Toolbar drawerToggleClicked={sideDrawerToggle} />
            <SideDrawer closed={sideDrawerCloseHandler} open={state.showSideDrawer} />
    <main className={classes.Content}>{props.children}</main>
        </>
    )
}
}
export default Layout
