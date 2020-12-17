import React,{Component} from 'react';
import CheckOutSummery from '../../Component/Order/CheckOutSummery/CheckOutSummery'
import {BrowserRouter as Route,Switch, BrowserRouter} from 'react-router-dom'
import ContactData from './ContactData/ContactData'


class CheckOut extends Component{
    state={
        ingredinets:{
            salad:1,
            meat:1,
            cheese:1,
            bacon:1
        }
    }
    
componentDidMount(){
    const query=new URLSearchParams(this.props.location.search);

    const ingredinets={};
    for(let param of query.entries()){
        //['salad',"1"]
        ingredinets[param[0]]=+param[1]
    
    }
    console.log('ingredients : ' + ingredinets)
    this.setState({ingredinets:ingredinets})
}


    checkoutContinuedHandler=()=>{
this.props.history.replace('/checkout/contact-data');
    }

    checkoutCancelledHandler=()=>{
this.props.history.goBack();
    }

    render(){
        return(
<div>
    <CheckOutSummery
     ingredient={this.state.ingredinets} 
     checkoutCancelled={this.checkoutCancelledHandler}
     checkoutContinued={this.checkoutContinuedHandler}
     />
    <Route path={ this.props.match.path + 'contact-data'} exact component={ContactData} />

</div>
        )
    }
}

export default CheckOut;