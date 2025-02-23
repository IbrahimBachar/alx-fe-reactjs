import React from 'react'
import { UserContext } from './UserContext'

function UserDetails() {
    const useContext = React.useContext(UserContext);
  return (
    <div>
        <p>Name: {useContext.name} </p>
        <p>Email: {useContext.email} </p>
    </div>
  )
}

export default UserDetails;