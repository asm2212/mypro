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
      <div className="flex flex-col items-center justify-center container text-center text-white">
        <h1 className="text-5xl font-extrabold mb-6">
          Hey!  I&apos;m Asmare Admasu
        </h1>
        <p className="text-2xl font-semibold max-w-[800px] mb-4">
          A 4th-year Software Engineering student with a passion for web and mobile development. I specialize in building functional, intuitive applications using modern frameworks and tools.
        </p>
        <p className="text-xl max-w-[800px] mb-8">
          Skilled in TypeScript, React, Next.js, Node.js, MongoDB, and Flutter, I am dedicated to creating user-centered applications that connect people with technology. Currently,I&apos;m open to opportunities in Web and Mobile Development to further apply my skills and bring innovative ideas to life.
        </p>
        <p className="text-lg max-w-[800px]">
          Let’s connect and explore how I can contribute to impactful projects and expand my experience in the tech industry!
        </p>
      </div>
    </section>
  )
}
