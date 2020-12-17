import React, {Component} from 'react';
import {connect} from 'react-redux'
import CounterControl from '../counterControl/CounterControl'
import CounterOutput from '../CounterOutput/CounterOutput'

class Counter extends Component{
    
    render(){
        return(
            <>
<CounterOutput value={this.props.ctr} />
<CounterControl label= "Increment" clicked={this.props.onIncrementCounter} />
<CounterControl label= "Decrement" clicked={this.props.onDecrementCounter} /> 
<CounterControl label= "Add 5" clicked={this.props.onAdd} />
<CounterControl label= "Substract 5" clicked={this.props.onSub} />
<hr />
<button onClick={this.props.storeResult}>Store Value</button>

        <ul>
            {this.props.result.map(strResult=><li key={strResult.id} onClick={() =>this.props.deletStore(strResult.id)}>{strResult.value}</li>)}</ul>
            </>
        )
    }
}

const mapStateToProps=state=>{
    return {
        ctr:state.counter,
        result:state.result
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onIncrementCounter: () => dispatch({type:"INCREMENT"}),
        onDecrementCounter: () => dispatch({type:"DECREMENT"}),
        onAdd: () => dispatch({type:"ADD 10",val:10}),
        onSub: () => dispatch({type:"SUB 10",val:10}),
        storeResult:() =>dispatch({type:'STORE_RESULT'}),
        deletStore:(id) =>dispatch({type:'DELET_STORE',resultElId:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)