import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>products page</h1>
        <div>
            Product 1: <Link href='/products/p1'>Product 1</Link>
        </div>
    </div>
  )
}

export default page