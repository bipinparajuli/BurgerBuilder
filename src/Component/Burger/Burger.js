import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


function Burger(props) {
    console.log(props.ingredient)
let transformIngredient=Object.keys(props.ingredient)
.map(igkey=>{
// console.log(igkey)
    return [...Array(props.ingredient[igkey])].map((_,i)=>{
console.log( "TYPE",igkey)
        return <BurgerIngredient key={igkey + i} type={igkey} />;
    });

}).reduce((arr,el)=>{
return arr.concat(el);
},[]);
// console.log(transformIngredient)

if(transformIngredient.length===0){

    transformIngredient=(
    <p>Please Enter the ingredient</p>)
}


    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
{transformIngredient}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger;
