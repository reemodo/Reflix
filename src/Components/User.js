import React from 'react'
import "./User.css"
export function User({name}) {
    

    return (
        <>
            <div className='userContainer'>{name}</div>
        </>
    )
}
