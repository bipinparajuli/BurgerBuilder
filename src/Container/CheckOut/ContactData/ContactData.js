import React,{Component} from 'react'
import Button from '../../../Component/Burger/UI/Button/Button'
import classes from './ContactData.module.css'

class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
        postalCode:''
        }
    }
orderHandler= (event)=>{
    event.preventDefault()
    console.log(this.props.ingredient)
}

    
    render(){
return(
    <div className={classes.ContactData}>
<h1>Enter Your Contact data</h1>
<form style={{color:'black'}}>
    <input type='text' placeholder='Enter Your Name' />
    <input type='email' placeholder='Enter Your Email' />
    <input type='text' placeholder='Enter Your Street' />
    <input type='text' placeholder='Enter Your Postalcode' />
    <Button className={classes.btn} onClick={this.orderHandler}>ORDER</Button>
</form>
</div>
)

    }
}

export default ContactData