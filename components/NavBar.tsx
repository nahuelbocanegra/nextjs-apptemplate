import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
   
    <ul className='flex'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
           <Link href="/login">Login</Link> 
        </li>
        <li>
           <Link href="/sing-up"> Sing Up</Link></li>
        <li>
           <Link href="/my-votes">My votes</Link>
        </li>
        <li>
           <Link href="/create-publication">Create Publication</Link> 
        </li>
    </ul>
  )
}
