import React, {useState} from 'react'
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


const BurgerBuilder = (props)=> {

    const [state, setState] = useState
    (
        {
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
    )
const {ingredient,TotalPrice,purchaseAble,purchasing,loading} = state;

const updatePurchase = (ingredients,newprice)=>{
// console.log('IG',ingredients)
const sum=Object.keys(ingredients)
.map((igKey)=>{
    // console.log(igKey)
return ingredients[igKey]
}).reduce((sum,el)=>{
    return sum+el;
},0)
console.log(state)
setState({...state,ingredient:ingredients,purchaseAble:sum>0,TotalPrice:newprice})
}


const addIngredients=(type)=>{
  
const oldCount=ingredient[type];
const updateCount=oldCount + 1;
const updatedIngredients={
    ...ingredient
}
// console.log('Up ' + updatedIngredients)

updatedIngredients[type]=updateCount;
const priceAddition=INGREDIENT_PRICES[type]
const oldPrice =TotalPrice;
const newPrice=oldPrice + priceAddition;
//  console.log(newPrice)
setState({...state, ingredient:updatedIngredients,TotalPrice:newPrice})
// console.log(state)

updatePurchase(updatedIngredients,newPrice)

}

const removeIngredients=(type)=>{
    const oldCount=state.ingredient[type];
    if(oldCount <= 0){
        return
    }
    const updateCount=oldCount - 1;
    const updatedIngredients={
        ...state.ingredient
    }
    updatedIngredients[type]=updateCount;
    const priceAddition=INGREDIENT_PRICES[type]
    const oldPrice =state.TotalPrice;
    const newPrice=oldPrice - priceAddition;
    setState({...state,TotalPrice:newPrice, ingredient:updatedIngredients})
    updatePurchase(updatedIngredients,newPrice)
    }

const purchaseHandler=()=>{
setState({...state,purchasing:true})
}

const purshaseCancledHandler=()=>
{
 setState({purchasing:false});
}

const purchaseContinueHandler=()=>{
const queryParems=[];

for(let i in state.ingredient)
{
    queryParems.push(encodeURIComponent(i) + '=' + encodeURIComponent(state.ingredient[i]))
}
const queryString = queryParems.join('&');

props.history.push({
    pathname:'./checkout',
    search:'?' + queryString,
})

}

const disableInfo={
    ...state.ingredient
}
for(let key in disableInfo){
    disableInfo[key]=disableInfo[key] <= 0;

}
let orderSummery=null;

let p =TotalPrice
console.log(p)

orderSummery=<OrderSummery 
    price={TotalPrice} 
    purchaseCancled={purshaseCancledHandler} 
    purchaseContinue={purchaseContinueHandler} 
    ingredients={ingredient} />

    if(loading){
        orderSummery=<Spinner />
    }


    return(
<>
    <Modal show={purchasing} modalClosed={purshaseCancledHandler} >
        {orderSummery}
    </Modal>
    <Burger ingredient={ingredient} />
    <BuildControls 
   price={TotalPrice}

ingredientAdded={addIngredients}
    ingredientDeleted={removeIngredients}
    disabled={disableInfo}
    purchaseAble={purchaseAble}
   order={purchaseHandler}
   />
</>
    )
}



export default withErrorHandler(BurgerBuilder,axios);