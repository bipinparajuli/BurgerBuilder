import React, {Component} from 'react'
// import Aux from '../../Component/hoc/Aux'
import Burger from '../../Component/Burger/Burger'
import BuildControls from '../../Component/Burger/BuildControls/BuildControls'
import Modal from '../../Component/Burger/UI/Modal/Modal'
import OrderSummery from '../../Component/Burger/OrderSummery/OrderSummery'
import axios from '../../../src/axios-orders'
import Spinner from '../../Component/Burger/UI/Spinner/Spinner'
import withErrorHandler from '../../Component/hoc/withErrorHandler/withErrorHandler'


const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.4,
    cheese:1.3,
    meat:0.7,
}


class BurgerBuilder extends Component{

state={
    ingredient:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0,
    },
    TotalPrice:4,
    purchaseAble:false,
    purchasing:false,
    loading:false
}

updatePurchase(ingredients){

const sum=Object.keys(ingredients)
.map((igKey)=>{
return ingredients[igKey]
}).reduce((sum,el)=>{
    return sum+el;
},0)
this.setState({purchaseAble:sum>0})
}


addIngredients=(type)=>{
    //console.log('OLd ingreident ' + type)
const oldCount=this.state.ingredient[type];
const updateCount=oldCount + 1;
const updatedIngredients={
    ...this.state.ingredient
}
updatedIngredients[type]=updateCount;
const priceAddition=INGREDIENT_PRICES[type]
const oldPrice =this.state.TotalPrice;
const newPrice=oldPrice + priceAddition;
this.setState({TotalPrice:newPrice, ingredient:updatedIngredients})
this.updatePurchase(updatedIngredients)
}

removeIngredients=(type)=>{
    const oldCount=this.state.ingredient[type];
    if(oldCount <= 0){
        return
    }
    const updateCount=oldCount - 1;
    const updatedIngredients={
        ...this.state.ingredient
    }
    updatedIngredients[type]=updateCount;
    const priceAddition=INGREDIENT_PRICES[type]
    const oldPrice =this.state.TotalPrice;
    const newPrice=oldPrice - priceAddition;
    this.setState({TotalPrice:newPrice, ingredient:updatedIngredients})
    this.updatePurchase(updatedIngredients)
    }

purchaseHandler=()=>{
this.setState({purchasing:true})
}

purshaseCancledHandler=()=>
{
    this.setState({purchasing:false});
}

purchaseContinueHandler=()=>{
//     //alert('You continue !')
//     this.setState({loading:true})
//     const order={
//         ingredients:this.state.ingredient,
//         price:this.state.TotalPrice,
//         customer:{
//             name:'Bipin',
//             address:{
//                 street:'Jhapa',
//                 country:'Nepal'
//             },
//             email:'bipinprjl@gmail.com'
//         },
//         deliveryMethod:'fast'
//     }
// axios.post('or.json',order)
// .then(response=>{
//     this.setState({loading:false,purchasing:false})
// })
// .catch(this.setState({loading:false}))
const queryParems=[];

for(let i in this.state.ingredient)
{
    queryParems.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredient[i]))
}
const queryString = queryParems.join('&');

this.props.history.push({
    pathname:'./checkout',
    search:'?' + queryString,
})

}



render(){
const disableInfo={
    ...this.state.ingredient
}
for(let key in disableInfo){
    disableInfo[key]=disableInfo[key] <= 0;

}
let orderSummery=null;

 orderSummery=<OrderSummery 
    price={this.state.TotalPrice} 
    purchaseCancled={this.purshaseCancledHandler} 
    purchaseContinue={this.purchaseContinueHandler} 
    ingredients={this.state.ingredient} />

    if(this.state.loading){
        orderSummery=<Spinner />
    }


    return(
<>
    <Modal show={this.state.purchasing} modalClosed={this.purshaseCancledHandler} >
        {orderSummery}
    </Modal>
    <Burger ingredient={this.state.ingredient} />
    <BuildControls 
    ingredientAdded={this.addIngredients}
    ingredientDeleted={this.removeIngredients}
    disabled={disableInfo}
    purchaseAble={this.state.purchaseAble}
   price={this.state.TotalPrice}
   order={this.purchaseHandler}
   />
</>
    )
}

}

export default withErrorHandler(BurgerBuilder,axios);