import React from 'react'

 export const StyledButton = ({children,className}) => {
    return (
        <button className={className} >
            <label>{children}</label>
        </button>
    )
}


