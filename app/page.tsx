import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='p-4'>
    <UserButton afterSignOutUrl='/sign-in'/>
    </div>
  )
}

export default page
