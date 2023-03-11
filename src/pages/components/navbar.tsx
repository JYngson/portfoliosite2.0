import Link from 'next/link'

export default function Navbar() {
  return (
    <div id='navbar' className='flex flex-row-reverse w-full h-16 p-4 justify-center items-center'>
      <Link href='/about_me' className='text-lg text-white hover:text-purple-700'>About Me</Link>
      <Link href='/' className='mx-4 text-lg text-white hover:text-purple-700'>Home</Link>
      <Link href='/projects' className='text-lg text-white hover:text-purple-700'>Projects</Link>
    </div>
  )
}
