'use client'
import { useSectionInView } from '@/lib/hooks'
import 'next-cloudinary/dist/cld-video-player.css'
import { useTheme } from 'next-themes'
import SectionDivider from '../section-divider'
//#ffcbb4
export default function Hero() {
  const { ref } = useSectionInView('home')
  const { theme } = useTheme()
  return (
    <section
      className="flex flex-col min-h-screen w-full scroll-mt-36 justify-center items-center relative"
      id="home"
      ref={ref}
    >
      <div
        className={`absolute top-0 left-0 h-screen w-screen ${
          theme === 'dark' && 'bg-[#000000ac]'
        }`}
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
      <div className="absolute top-1/4 flex flex-col items-center justify-center container">
        <div className="text-4xl font-extrabold mb-14">
          Hey! I&apos;m Asmare.
        </div>
        <div className="flex flex-col items-center text-center font-semibold tracking-wide max-w-[1000px] space-y-4 text-gray-200">
          <p>Asmare Admasu - 4th Year Software Engineering Student at Haramaya University</p>
          <p>Junior Developer with a strong focus on web and mobile app development</p>
          <p>Passionate about creating efficient, user-centered applications using technologies like Flutter, Next.js, Node.js, and TypeScript</p>
          <p>Full-stack expertise with hands-on experience in MERN stack, Prisma, and database technologies (MongoDB/PostgreSQL)</p>
          <p>Involved in community initiatives, including a university tech club, where I organize and participate in events like hackathons, seminars, and outreach programs</p>
          <p>Driven to leverage technology to solve real-world problems and enhance the user experience</p>
        </div>
        </div>
      <SectionDivider />
    </section>
  )
}
