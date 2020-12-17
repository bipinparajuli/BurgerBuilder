import React, {Component} from 'react'
// import Aux from '../hoc/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer'


class Layout extends Component {

state={
    showSideDrawer:true
}

sideDrawerCloseHandler=()=>{
this.setState({showSideDrawer:false})

}
sideDrawerToggle=()=>{
this.setState((prevState)=>{
    return {showSideDrawer:!prevState.showSideDrawer}
})
}
    render(){
    return (
        <>
            <Toolbar drawerToggleClicked={this.sideDrawerToggle} />
            <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
    <main className={classes.Content}>{this.props.children}</main>
        </>
    )
}
}
export default Layout
