import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import { uuid } from 'uuidv4';

type accordionProps = {
  stats: stats,
  about: string
};

type stats = {
  years: number,
  location: string,
  primaryTech: string[],
  secondaryTech: string[],
  education: school[],
  interests: string[],
  github: string,
  linkedin: string
};

type school = {
  school: string,
  dateAttended: string
};

const AccordionComponent: React.FunctionComponent<accordionProps> = (props) => {
  const {stats, about} = props
  return (
    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} className='w-full mt-6'>
      <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton className='h-10 border-2 border-gray-600 bg-neutral-300 rounded-lg text-center text-xl'>
                Summary
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className='flex flex-col p-4 bg-neutral-300 bg-opacity-30 rounded-xl mb-4'>
          <div className='mb-2 flex flex-row'>
            <a href={stats.github} target='_blank'>
              <BsGithub size={'3em'} className='mr-2' color={'#333'} />
            </a>
            <a href={stats.linkedin} target='_blank'>
              <BsLinkedin size={'3em'} color={'#313335'} />
            </a>
          </div>              
          <p className='text-lg text-white'>Years Coding: <span className='text-black hover:text-purple-700'>{stats.years}</span></p>
          <p className='text-lg text-white'>Location: <span className='text-black hover:text-purple-700'>{stats.location}</span></p>
          <p className='text-lg text-white overflow-wrap'>Primary Technologies: {stats.primaryTech.map(tech =>
            <span key={uuid()} className='text-black hover:text-purple-700'>
              {tech}{" "}
            </span>)}
          </p>
          <p className='text-lg text-white'>Currently Learning: {stats.secondaryTech.map(tech =>
            <span key={uuid()} className='text-black hover:text-purple-700'>
              {tech}{" "}
            </span>)}
          </p>
          <h2 className='text-lg text-white'>Education:</h2>
          {stats.education.map(school =>
            <div key={uuid()} className='ml-2 my-2'>
              <p className='text-lg text-white underline'>{school.school}</p>
              <p className='text-lg text-white'>- {school.dateAttended}</p>
            </div>
          )}
          <p className='text-lg text-white'>Hobbies: {stats.interests.map(hobby =>
            <span key={uuid()} className='text-black hover:text-purple-700'>
              | {hobby} |
            </span>)}
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem className='mb-6'>
        <AccordionItemHeading>
          <AccordionItemButton className='h-10 border-2 border-gray-600 bg-neutral-300 rounded-lg text-center text-xl'>
              About Me
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className='p-4 bg-neutral-300 bg-opacity-30 rounded-xl whitespace-pre-line'>
          <p className='text-slate-200'>
            {about}
          </p>
        </AccordionItemPanel>
      </AccordionItem>
  </Accordion>
  )
}


export default AccordionComponent