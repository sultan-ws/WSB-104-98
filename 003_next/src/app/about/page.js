import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>about page</h1>
        <Link href='/'>home</Link>
        <Link href='/contact'>Contact</Link>
    </div>
  )
}

export default page