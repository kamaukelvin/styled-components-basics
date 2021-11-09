import React from 'react'

export const StyledCard = ({className, card: {id,title,body,image}}) => {
    return (
        <div className={className} >
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`./images/${image}`} alt=""/>
            </div>

        </div>
    )
}


