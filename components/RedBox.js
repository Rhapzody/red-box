import React from 'react'

function RedBox(props) {
    return (
        <div style={{borderColor:'red'}}>
            {props.children}
        </div>
    )
}

export {RedBox}
