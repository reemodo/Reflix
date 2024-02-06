import React, { useState } from 'react'
import './Landing.css'
import { Users } from '../Users'
export function Landing({users}) {
    return (
        <>
            <div className="home">
                <h1 className='header'>WHO'S WATCHING?</h1>
                <Users users={users}/>
            </div>
        </>
    )
}
