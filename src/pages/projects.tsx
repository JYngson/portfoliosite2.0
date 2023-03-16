import Head from 'next/head'
import Link from 'next/link'
import projectList from "../../public/projects.json"
import Navbar from '../../components/navbar'
import { uuid } from 'uuidv4'


export default function projects() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
      </Head>
      <div id='projectPage' className='flex flex-col items-center w-screen h-fit bg-slate-700 font-raleway py-20'>
        <div id='projectPageWrapper' className='flex flex-col w-5/6 items-center'>
        <Navbar />

          <div className='flex items-center m-4 w-5/6 h-20 bg-gray-800 rounded-xl'>
            <h1 className='w-full text-center text-3xl text-white'>My Projects</h1>
          </div>

          <div className='flex flex-col w-full'>
              {
                projectList.projectList.map(project => {
                  return(
                    <div key={uuid()} className='flex flex-col w-full my-2 rounded-xl border-2 border-stone-500 bg-neutral-300 space-y-1 p-4 drop-shadow-xl'>
                      <div>
                        <h2 className='text-2xl bg-gradient-to-r from-yellow-400 to-purple-700 text-transparent bg-clip-text w-fit'>{project.title}</h2>
                        <p>{project.type}&nbsp;{project.date}</p>
                      </div>
                      <p>{project.description}</p>
                      <div className='flex flex-row w-fit'>
                        <p> Skills:&nbsp;
                          {
                            project.primarySkills.map(skill => {
                              return(
                                <span key={uuid()} className='text-slate-500'>{skill} &nbsp;</span>
                              )
                            })
                          }
                        </p>
                      </div>

                      <div className='flex flex-row'>
                        <p className='text-sm'> Keywords:&nbsp;
                          {
                            project.keywords.map(keyword => {
                              return(
                                <span key={uuid()}>{keyword}&nbsp; </span>
                              )
                            })
                          }
                        </p>
                      </div>
                      <div className='flex flex-row-reverse'>
                        {
                          project.videoLink? 
                            <Link href={project.videoLink} target="_blank" className='text-purple-800 ml-2'>Demo Video</Link>
                          :
                          <></>
                        }
                        <Link href={project.link} target="_blank" className='text-purple-800'>Project Link</Link>
                      </div>
                    </div>

                  )
                })
              }
          </div>
        </div>
      </div>
    </div>
  )
}
