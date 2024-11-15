'use client'

import React from 'react'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeading from '../section-heading'
import Image from 'next/image'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('skills')

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full min-h-screen bg-orange-500 mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          const [skillName, skillImage] = skill
          return (
            <motion.li
              key={index}
              className="bg-gray-200 borderBlack flex justify-center items-center rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Image
                src={skillImage}
                alt={skillName} 
                width={24}
                height={24}
                className="w-6 h-6 mr-2 inline"
              />
              {skillName}
            </motion.li>
          )
        })}
      </ul>
    </section>
  )
}
