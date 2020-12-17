
const initialState={
    counter:0,
    result:[]
}

const reducer =(state = initialState,action)=>{

    switch(action.type){
        case 'INCREMENT':           
    return {
        ...state,
        counter:state.counter + 1
            }
            case 'DECREMENT':           
            return {
                ...state,
                counter:state.counter + 1
                    }
                    case 'ADD 10':           
    return {
        ...state,
        counter:state.counter + action.val
            }
            case 'SUB 10':           
    return {
        ...state,
        counter:state.counter - action.val
            }
            case 'STORE_RESULT':           
            return {
                ...state,
                result:state.result.concat({value:state.counter,id:new Date()})
                    }
                    case 'DELET_STORE':

                    
                        const updatedArray =state.result.filter((result)=> result.id !== action.resultElId)           
                    return {
                        ...state,
                        result:updatedArray
                            }
                
        }
        
        return state
    }
export default reducer