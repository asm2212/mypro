'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import SectionDivider from '../section-divider'
import TextAnimation from '../text-animation'

export default function Hero() {
  const { theme } = useTheme() 
  const { ref } = useSectionInView('home')
  return (
    <section ref={ref} className="relative h-screen w-screen">
      <div
        className={`absolute top-0 left-0 h-screen w-screen ${theme === 'dark' ? 'bg-[#0000007c]' : ''}`}
      ></div>
      <video
        width="480"
        height="720"
        preload="none"
        autoPlay
        muted
        loop
        className="object-cover h-screen w-screen"
      >
        <source src="/layout.mp4" />
      </video>

      <div className="absolute top-1/4 flex flex-col items-start justify-center container tracking-wide z-10">
        <div className="relative w-full h-full container">
          <div className="absolute left-0 text-5xl font-extrabold mb-10 text-start h-24 max-w-[400px]">
            <span className="text-5xl font-extrabold mb-10 text-start">
              Hey!👋
            </span>
            <br />
            <TextAnimation delay={1} baseText={`I'm Asmare`} />
          </div>
          <motion.div
            className="text-2xl absolute right-0 flex text-center items-center justify-center tracking-wide font-semibold w-[400px] h-[400px] p-4 bg-opacity-90 rounded-full max-h-[400px] bg-[#ffcbb4] border border-black z-20"
            initial={{ y: -100, x: 0, opacity: 0 }}
            animate={{ y: 0, x: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center max-w-[80%]">
              Asmare Admasu - 4th Year Software Engineering Student at Haramaya University
              Junior Developer with a strong focus on web and mobile app development.
              Passionate about creating efficient, user-centered applications using technologies like Flutter, Next.js, Node.js, and TypeScript.
              Full-stack expertise with hands-on experience in MERN stack, Prisma, and database technologies (MongoDB/PostgreSQL).
              Involved in community initiatives, including a university tech club, where I organize and participate in events like hackathons, seminars, and outreach programs.
              Driven to leverage technology to solve real-world problems and enhance the user experience.
            </div>
          </motion.div>
        </div>
      </div>
      
      <SectionDivider />
    </section>
  )
}
