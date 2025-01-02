import { main } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='p-10'>
        <h1>Dashboard</h1>
        <Link href={"/admin"}>Admin Panel</Link>
    </main>
  )
}

export default page