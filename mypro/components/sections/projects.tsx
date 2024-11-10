'use client'
import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import { projectsData } from '@/lib/data'
import Project from '../ui/project'

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.25)
  return (
    <section
      className={`flex flex-col justify-center items-center w-full min-h-screen my-24 scroll-mt-36`}
      id="projects"
      ref={ref}
    >
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}