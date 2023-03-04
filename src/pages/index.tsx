import Head from 'next/head'
import { motion } from "framer-motion"
import { Inter } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div id='homepage'>
      <Head>
        <title>James Yngson Portfolio Site</title>
        <link href='https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap' rel='stylesheet'></link>
      </Head>
        <div 
          id='wrapper'
          className='relative flex w-screen h-screen justify-center items-center bg-neutral-900 overflow-hidden font-mono'
        >
          <div className='absolute flex flex-row w-screen h-full bg-transparent z-20'>
            <div id='projectsLink' className='w-1/4 h-screen flex justify-center items-center opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-l from-transparent to-yellow-400'>
              <h2 className='text-3xl bg-gradient-to-l from-yellow-400 to-purple-700 text-transparent bg-clip-text'>My Projects</h2>
            </div>

            <div id='headline' className='w-2/4 h-screen flex flex-col justify-center items-center font-bold'>
              <h1 className='text-4xl text-yellow-400 text-center mb-4'>Hi, I'm {' '}
                <span className='bg-gradient-to-l from-red-600 to-sky-700 text-transparent bg-clip-text'>
                  James.
                </span>
              </h1>
              <p className='text-2xl text-yellow-400 text-center'>I'm a {' '}
                <span className='bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text'>
                  Junior Software Developer
                </span> 
              {' '}based out of{' '}
                <span className='bg-gradient-to-r from-fuchsia-600 to-green-400 text-transparent bg-clip-text'>
                  Vancouver, BC.  
                </span>
              </p>
            </div>

            <div id='aboutLink' className='w-1/4 h-screen flex justify-center items-center opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent to-purple-700'>
              <h2 className='text-3xl bg-gradient-to-l from-yellow-400 to-purple-700 text-transparent bg-clip-text'>About Me</h2>
            </div>
          </div>

          <motion.div
            id='yinYangRotate'
            animate={{rotate: 360}} 
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className='absolute z-10'
            >
            <div id='yinYangStyle' 
              className='flex h-[1200px] w-[1200px] items-center rounded-full border-2 border-black overflow-hidden'
              style={{background:"linear-gradient(to bottom, #000000, #000000 50%, #FFFFFF 50%, #FFFFFF)" }}
            >
              <div id='yin' className='flex items-center justify-center h-[600px] w-[600px] bg-white rounded-full'>
                <div id='yangSeed' className='w-1/2 h-1/2 rounded-full bg-gradient-to-r from-yellow-400 to-purple-700' />
              </div>

              <div id='yang' className='flex items-center justify-center h-[600px] w-[600px] bg-black rounded-full'>
                <div id='yinSeed' className='w-1/2 h-1/2 rounded-full bg-gradient-to-l from-yellow-400 to-purple-700' />
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}