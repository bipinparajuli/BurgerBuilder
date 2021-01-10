import React,{useState} from 'react'
import Button from '../../../Component/Burger/UI/Button/Button'
import classes from './ContactData.module.css'

const ContactData = (props)=> {
    const [state, setstate] = useState({
        name:'',
        email:'',
        address:{
        street:'',
        postalCode:''
        }
    })
    
const orderHandler= (event)=>{
    event.preventDefault()
    console.log(props.ingredient)
}

    
return(
    <div className={classes.ContactData}>
<h1>Enter Your Contact data</h1>
<form style={{color:'black'}}>
    <div className={classes.formdata}>
    <input type='text' placeholder='Enter Your Name' />
    <input type='email' placeholder='Enter Your Email' />
    <input type='text' placeholder='Enter Your Street' />
    <input type='text' placeholder='Enter Your Postalcode' />
    <button className={classes.btn} onClick={orderHandler}>ORDER</button>
    </div>
</form>

</div>
)

    }


export default ContactData