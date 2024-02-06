import React from 'react'
import { User } from './User'
import './User.css';
import { Link } from 'react-router-dom';
export function Users({users}) {
    return (
        <>
            <ul className="userList">
                    {users.map(user => <Link to={{ pathname: `/catalog`,  search: `?userName=${user.name}`}}><li className={`user ${user.color}`}><User name={user.name} key={user.name}/></li></Link>)}
            </ul>
        </>
    )
}
