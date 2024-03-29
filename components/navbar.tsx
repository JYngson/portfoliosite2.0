import Link from 'next/link'

export default function Navbar() {
  return (  
    <div id='navbar' className='absolute top-0 z-50 flex flex-row-reverse w-full h-16 p-4 justify-center items-center bg-slate-800/50 font-mono'>
        <a href="/James_Yngson_Resume_(SE).pdf" download className='sm:text-sm md:text-lg text-white hover:text-purple-700'>Resume</a> 
        <Link href='/about_me' className='sm:text-sm md:text-lg text-white hover:text-purple-700 mr-3'>About</Link>
        <Link href='/' className='sm:text-sm md:text-lg text-white hover:text-purple-700 mr-3'>Home</Link>
        <Link href='/projects' className='sm:text-sm md:text-lg text-white hover:text-purple-700 mr-3'>Projects</Link>
    </div>
  )
}
