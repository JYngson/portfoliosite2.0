import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import AccordionComponent from '../../components/accordion'
import aboutData from '../../public/about.json'
import ProfilePic from '../../public/profilepic.jpg'

export default function about_me() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
      </Head>
      <div id='aboutPage' className='flex flex-col items-center w-screen h-screen bg-slate-700 font-raleway overflow-scroll pt-20'>
        <Navbar />
        <div className='flex flex-col items-center w-screen'>
          <div className='w-[150px] h-[150px] rounded-full relative mb-6'>
            <Image
              src={ProfilePic}
              placeholder='blur'
              alt="Me!"
              className='rounded-full'
              fill
              style={{objectFit:"cover"}}
              priority
            />
          </div>
          <div className='flex flex-col w-5/6 rounded-xl border-2 border-gray-600 bg-neutral-300 bg-opacity-30 p-4 items-center'>
            <h1 className='text-4xl text-white mb-4 w-fit'>{aboutData.greeting}</h1>
            <p className='text-lg w-fit'>{aboutData.headline}</p>
          </div>
          <div className='w-5/6'>
            <AccordionComponent stats={aboutData.stats} about ={aboutData.about}/>
          </div>
        </div>        
      </div>
    </div>
  )
}
