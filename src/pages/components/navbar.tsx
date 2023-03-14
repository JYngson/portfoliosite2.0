import Link from 'next/link'
import Head from 'next/head'

export default function Navbar() {
  return (  
    <div id='navbar' className='absolute top-0 z-50 flex flex-row-reverse w-full h-16 p-4 justify-center items-center bg-slate-800/50 font-mono'>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap' rel='stylesheet' />
      </Head>
        <a href="/James_Yngson_Resume_(SE).pdf" download className='text-lg text-white hover:text-purple-700'>Resume</a> 
        <Link href='/about_me' className='text-lg text-white hover:text-purple-700 mr-3'>About Me</Link>
        <Link href='/' className='text-lg text-white hover:text-purple-700 mr-3'>Home</Link>
        <Link href='/projects' className='text-lg text-white hover:text-purple-700 mr-3'>Projects</Link>
    </div>
  )
}
