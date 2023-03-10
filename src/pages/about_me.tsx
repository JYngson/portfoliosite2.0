import Head from 'next/head'
import Navbar from './components/navbar'
import Image from 'next/image'


export default function about_me() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
        <link href='https://fonts.googleapis.com/css2?family=Raleway&display=swap' rel='stylesheet'/>
      </Head>
      <div id='aboutPage' className='flex flex-col items-center w-screen h-screen bg-slate-700 font-raleway'>
        <Navbar />

        <div className='flex flex-row'>
          <div className='block w-[150px] h-[150px] rounded-full relative'>
            <Image
              src="/profilepic.jpg"
              alt="Me!"
              className='rounded-full'
              fill
              style={{objectFit:"cover"}}          
              priority
            />
          </div>
          <div className='bg-red-700'>
            <h1>Hello About Me</h1>
          </div>
        </div>        
      </div>
    </div>
  )
}
