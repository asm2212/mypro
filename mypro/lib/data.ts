import jegoliImg from '@/public/images/jegoliImg.jpg'
import smsImg from '@/public/images/smsImg.jpg'
import RealestateImg from '@/public/images/RealestateImg.jpg'
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const
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
  'JavaScript',
  'TypeScript',
  'Dart',
    'Flutter',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Shadcn',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'Cloudinary',
  'Axios',
  'Framer Motion',
  'Flutter'
] as const