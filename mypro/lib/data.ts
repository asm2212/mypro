import jegoliImg from '@/public/images/jegoliImg.jpg'
import smsImg from '@/public/images/smsImg.jpg'
import RealestateImg from '@/public/images/RealestateImg.jpg'
export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const

export const images = {
  jegoliImg,
  smsImg,
  RealestateImg
}
export const projectsData = [
  {
    title: 'jegoli ',
    description:
      'jegoli  - food delivery app',
    tags: [
      'flutter',
    ],
    imageUrl: jegoliImg,
  },
  {
    title: 'sms',
    description:
      '',
    tags: ['React', ],
    imageUrl: smsImg,
  },
  {
    title: 'Real-estate',
    description:
      ' ',
    tags: [
      'React',
    ],
    imageUrl: RealestateImg,
  },
 
] as const
export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Git', '/svgs/git.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Headless', '/svgs/brand-headlessui.svg'],
  ['Prisma', '/svgs/file-type-light-prisma.svg'], 
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Clerk', '/svgs/clerk.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['', '/svgs/etc.svg'],
] as const