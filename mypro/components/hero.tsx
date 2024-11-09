'use client'
import { useSectionInView } from '@/lib/hooks'
export default function Hero() {
  const { ref } = useSectionInView('home')
  return (
    <section
      className="flex min-h-screen scroll-mt-72 justify-center"
      id="home"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center max-w-[1000px]">
        <div className="text-4xl font-bold mb-14">Hey! I&apos;m Asmare.</div>
        <div className="flex text-center font-semibold tracking-wide">
        Asmare admasu - 4 th year software enginnering student
        </div>
      </div>
    </section>
  )
}