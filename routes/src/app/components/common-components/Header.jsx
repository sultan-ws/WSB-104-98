import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <Link href='/'>home</Link>
        <Link href='/about'>about</Link>
        <Link href='/contact'>contact</Link>
        <Link href='/signin'>signin</Link>
        <Link href='/register'>sign up</Link>
    </div>
  )
}

export default Header