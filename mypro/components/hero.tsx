'use client'
import { useSectionInView } from '@/lib/hooks'

export default function Hero() {
  const { ref } = useSectionInView('home')
  return (
    <section
      className="flex min-h-screen w-full scroll-mt-36 justify-center bg-gray-500"
      id="home"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center container">
        <div className="text-4xl font-bold mb-6 text-white">Hey! I&apos;m Asmare.</div>
        <div className="flex flex-col items-center text-center font-semibold tracking-wide max-w-[1000px] space-y-4 text-gray-200">
          <p>Asmare Admasu - 4th Year Software Engineering Student at Haramaya University</p>
          <p>Junior Developer with a strong focus on web and mobile app development</p>
          <p>Passionate about creating efficient, user-centered applications using technologies like Flutter, Next.js, Node.js, and TypeScript</p>
          <p>Full-stack expertise with hands-on experience in MERN stack, Prisma, and database technologies (MongoDB/PostgreSQL)</p>
          <p>Involved in community initiatives, including a university tech club, where I organize and participate in events like hackathons, seminars, and outreach programs</p>
          <p>Driven to leverage technology to solve real-world problems and enhance the user experience</p>
        </div>
      </div>
    </section>
  )
}
