'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useActiveSectionContext } from '@/store/active-section-context'
import Image from 'next/image'
import SectionDivider from '../section-divider'
import portfolioImg from '../../public/images/photo.jpg'

export default function About() {
  const { activeSection } = useActiveSectionContext()
  const { theme } = useTheme()
  const { ref } = useSectionInView('about', 0.5)

  return (
    <motion.section
      className={`flex flex-col justify-center items-center leading-8 h-[1000px] z-50 w-full`}
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="relative w-[980px] h-[800px] overflow-hidden">
        <div className="group">
          <div className="flex flex-col items-center justify-center container text-center text-white">
            <h1 className="text-5xl font-extrabold mb-6">
              Hey! I&apos;m Asmare Admasu
            </h1>
            <p className="text-2xl font-semibold max-w-[800px] mb-4">
              A 4th-year Software Engineering student with a passion for web and mobile development. I specialize in building functional, intuitive applications using modern frameworks and tools.
            </p>
            <p className="text-xl max-w-[800px] mb-8">
              Skilled in TypeScript, React, Next.js, Node.js, MongoDB, and Flutter, I am dedicated to creating user-centered applications that connect people with technology. Currently, I&apos;m open to opportunities in Web and Mobile Development to further apply my skills and bring innovative ideas to life.
            </p>
            <p className="text-lg max-w-[800px]">
              Let’s connect and explore how I can contribute to impactful projects and expand my experience in the tech industry!
            </p>
          </div>

          <span
            className={`text-2xl font-bold ${
              activeSection === 'about' && theme === 'dark'
                ? 'bg-[#ddbea9]'
                : 'bg-[#ffcbb4]'
            }`}
          >
            Contact me!
          </span>
        </div>

        <div className="absolute left-0 top-1/4 z-30">
          <div className="relative w-[470px] h-[470px]">
            <div className="group-hover:opacity-70 transition-opacity absolute inset-0 bg-gradient-to-b from-[#ffcbb4] from-30% via-[#ebd4cb] via-50% to-[#f5e9e2] to-70% rounded-full z-20"></div>
            <div className="absolute inset-0">
              <Image
                src={portfolioImg}
                alt="portfolio image"
                layout="fill" // Use layout fill for correct image scaling
                objectFit="cover" // Ensures the image covers the entire area of the container
                placeholder="blur"
                className="rounded-full z-10 w-[470px] h-[470px]"
              />
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </motion.section>
  )
}
