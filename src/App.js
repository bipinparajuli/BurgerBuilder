import React, { Component } from 'react'
import classes from './App.module.css'
import Layout from './Component/Layout/Layout'
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder'
import axois from 'axios'
import CheckOut from './Container/CheckOut/CheckOut'
import {Route,Switch} from 'react-router-dom'
import ContactData from './Container/CheckOut/ContactData/ContactData'
import NoMatch from './NoMatch'

class App extends Component{
  componentDidMount(){
axois.get('https://jsonplaceholder.typeicode.com/posts')
.then(response=>{
  console.log(response)
})

  }
render(){
return (

<> 
<Layout>
  <Switch>
    <Route path='/' exact component={BurgerBuilder} />
    <Route path='/checkout' exact component={CheckOut} />
    <Route path='/checkout/contact-data' exact component={ContactData} /> 
    <Route path component={NoMatch} />    
  </Switch>
</Layout>

</>
)
}

}

export default App

/*

constructor(prop){
  super()
  console.log('Constructor is loading . . ')
}

state={
  name:'bipin',
  age:45
}





componentDidMount(){
  console.log('componentDidMount loading . . .')
}

changeHandler(e){
//e.target.preventDefault


let name=e.target.value
console.log(name)
}

*/