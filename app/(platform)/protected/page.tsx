'use client'
import { UserButton, auth, currentUser, useAuth, useUser } from '@clerk/nextjs'
import React from 'react'

const Protected = () => {

    const {userId} =useAuth()
    const {user} =useUser()
  return (
    <div>
        User :{user?.fullName}  {userId}
        <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Protected