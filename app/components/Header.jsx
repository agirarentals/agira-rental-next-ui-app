import { Link } from '@nextui-org/link'
import React from 'react'

const Header = () => {
    const menuList=[
        {
          name:"Home",
          link:"/"
        },
        {
          name:"About Us",
          link:"/about-us"
        },
        {
          name:"Contact Us",
          link:"/contact-us"
        },
      ]
  return (
    <nav className='py-4 px-14 border-b flex items-center justify-between'>
        <img className='h-14' src="/logo.png" alt="logo" />
        <div className='flex gap-4 font-semibold'>
            {menuList?.map((item)=>{
                return <Link key={item?.name} href={item?.link}>{item?.name}</Link>
            })}
        </div>
        <Link href='/login'><button className='bg-blue-500 px-3 py-1 rounded-full text-white'>Login</button></Link>
    </nav>
  )
}

export default Header