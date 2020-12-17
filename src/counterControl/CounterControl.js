import React from 'react'

function CounterControl(props) {
    return (
        <div onClick={props.clicked}>
            {props.label}
        </div>
    )
}

export default CounterControl
