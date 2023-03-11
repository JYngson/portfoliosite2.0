import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
  github: string
};

type school = {
  school: string,
  dateAttended: string
};

const AccordionComponent: React.FunctionComponent<accordionProps> = (props) => {
  const {stats, about} = props
  console.log(props)
  return (
    <Accordion allowZeroExpanded={true} allowMultipleExpanded={true} className='w-full mt-6'>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='h-10 border-2 border-gray-600 bg-neutral-300 rounded-md text-center text-xl'>
                        Summary
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex flex-col p-4 bg-neutral-300 bg-opacity-30 rounded-xl'>
                  <a href={stats.github} className='w-fit text-2xl text-purple-900 border-2 border-purple-700 rounded-xl p-1 mb-2'>My Github</a>
                  <p className='text-lg text-white'>Years Coding: <span className='text-black'>{stats.years}</span></p>
                  <p className='text-lg text-white'>Location: <span className='text-black'>{stats.location}</span></p>
                  <p className='text-lg text-white'>Primary Technologies: {stats.primaryTech.map(tech =>
                    <span className='text-black'>
                      {tech} {" "}
                    </span>)}
                  </p>
                  <p className='text-lg text-white'>Currently Learning: {stats.secondaryTech.map(tech =>
                    <span className='text-black'>
                      {tech} {" "}
                    </span>)}
                  </p>
                  <h2 className='text-lg text-white'>Education:</h2>
                  {stats.education.map(school =>
                  <div className='ml-2 my-2'>
                    <p className='text-lg text-white underline'>{school.school}</p>
                    <p className='text-lg text-white'>- {school.dateAttended}</p>
                  </div>
                  )}
                  <p className='text-lg text-white'>Hobbies: {stats.interests.map(hobby =>
                    <span className='text-black'>
                      | {hobby} |
                    </span>)}
                  </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='h-10 border-2 border-gray-600 bg-neutral-300 rounded-xl text-center text-xl'>
                        Long Form
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                      {about}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
  )
}


export default AccordionComponent