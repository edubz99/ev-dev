import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { XIcon } from '@/components/icons/x'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { OpenAIIcon } from '@/components/icons/tags/openai'
import { ReactIcon } from '@/components/icons/tags/react'
import { SWCIcon } from '@/components/icons/tags/swc'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { ShadcnIcon } from '@/components/icons/tags/shadcn-ui'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { AstroIcon } from '@/components/icons/tags/astro'
import { SvelteIcon } from '@/components/icons/tags/svelte'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { BootstrapIcon } from '@/components/icons/tags/bootstrap'
import { SupabaseIcon } from '@/components/icons/tags/supabase'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { PNPMIcon } from '@/components/icons/tags/pnpm'
import { VercelIcon } from '@/components/icons/tags/vercel'
import { BasehubIcon } from '@/components/icons/tags/basehub'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { MailIcon, InstagramIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Evans Dube',
  initials: 'ED'
}

export const ABOUT = {
  title: `Frontend Engineer, Problem Solver and Enthusiastic Learner.
  Crafting seamless user experiences, one pixel at a time. Based in Birmingham, England 🇬🇧`,
  description: `Passionate about creating innovative tech solutions for impact.
 Focused on leveraging advanced frontend technologies to enhance accessibility and performance in web applications.
  My main goal is to enhance user experience, making the web a better place for everyone.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/edubz99',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/evdevelops',
    icon: LinkedInIcon
  },
  {
    title: 'X (Twitter)',
    url: 'https://x.com/Evz_Devz',
    icon: XIcon
  },
  {
    title: 'Email',
    url: `mailto:${process.env.EMAIL_RECEIVER}`,
    icon: MailIcon
  }
]

export const CAREER = [
  {
    company: 'S&P Global',
    link: 'https://www.spglobal.com/en',
    badges: ['Hybrid'],
    title: 'Front End Software Engineer',
    start: 'Jul, 2022',
    end: 'Present',
    description:
      'Integrating new features into the datagrid built on top of AG Grid. Customising interactive dashboards to accommodate various data types, reporting formats, and visualisation scenarios specific to private market investments.'
  },
  {
    company: 'Purplebricks',
    link: 'https://www.purplebricks.co.uk',
    badges: ['Remote'],
    title: 'Mid-level Front End Engineer',
    start: 'Sept, 2021',
    end: 'Jul 2022',
    description: 'Involved in several greenfield and brownfield projects focused on enhancing revenue streams.'
  },
  {
    company: '5874 Design Ltd',
    link: 'https://5874commerce.com',
    badges: ['Hybrid'],
    title: 'Web Developer',
    start: 'Apr, 2021',
    end: 'Sept, 2021',
    description:
      'Developing eCommerce solutions - building custom websites driven by the Bigcommerce SaaS platform.'
  },
  {
    company: 'Ballyhoo Ltd',
    link: 'https://ballyhoo.co.uk',
    badges: ['On-site'],
    title: 'Front End Developer',
    start: 'Sept, 2018',
    end: 'Apr, 2021',
    description: 'Responsible for transforming web design concepts into fully functional websites using the latest front-end technologies.'
  },
  {
    company: 'DHL & Jaguar Land Rover',
    link: 'https://www.jaguarlandrover.com',
    badges: ['On-site'],
    title: 'Internal Project Planner',
    start: 'Nov, 2014',
    end: 'Dec, 2017',
    description: 'Project Planner supporting the DHL operations at Jaguar Land Rover’s main production plant. Part of a team to successfully implement five new cars introductions over 3 years.'
  },
  {
    company: 'Sunmaia Internet Ltd',
    badges: ['On-site'],
    title: 'Junior Web Developer',
    start: 'May, 2014',
    end: 'Oct, 2014',
    description: 'Custom Wordpress theme developmen and Front-end development. Migrating from legendary code and refactoring.'
  }
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  SHADCN: {
    name: 'Shadcn/ui',
    icon: ShadcnIcon
  },
  SWC: {
    name: 'SWC',
    icon: SWCIcon
  },
  OPENAI: {
    name: 'OpenAI',
    icon: OpenAIIcon
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon
  },
  SVELTE: {
    name: 'Svelte',
    icon: SvelteIcon
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  VITEST: {
    name: 'Vitest',
    icon: VitestIcon
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: BootstrapIcon
  },
  SUPABASE: {
    name: 'Supabase',
    icon: SupabaseIcon
  },
  REDUX: {
    name: 'Redux',
    icon: ReduxIcon
  },
  PNPM: {
    name: 'PNPM',
    icon: PNPMIcon
  },
  VERCEL: {
    name: 'Vercel',
    icon: VercelIcon
  },
  BASEHUB: {
    name: 'BaseHub',
    icon: BasehubIcon
  },
  GRAPHQL: {
    name: 'GraphQL',
    icon: GraphQLIcon
  }
}

export const PROJECTS = [
  {
    title: 'Teacher Tee',
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.JAVASCRIPT,
      TAGS.HTML,
      TAGS.CSS
    ],
    description: 'Online resource for ESL Teachers',
    link: {
      preview: 'https://teachertee.com/'
    },
    image: '/images/teacherT.png'
  },
  {
    title: 'The Venari',
    tags: [
      TAGS.TYPESCRIPT,
      TAGS.JAVASCRIPT,
      TAGS.HTML,
      TAGS.CSS
    ],
    description:
      'A Job Board for Candidates & Employers.',
    link: {
      preview: 'https://thevenari.com/'
    },
    image: '/images/the_venari.png'
  },
  {
    title: 'Simple Personality Quiz',
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.HTML,
      TAGS.CSS
    ],
    description:
      'A simple chat app that uses the OpenAI API and Vercel AI SDK to chat with Darth Vader.',
    link: {
      github: 'https://github.com/edubz99/Simple-Personality-Quiz'
    },
    image: '/images/personality_quiz.png',
    preview: 'https://codepen.io/edubz99/pen/PeRjNb'
  },
  {
    title: 'Food Recipe Generator',
    tags: [TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML],
    description:
      'A simple recipe generator.',
    link: {
      github: 'https://github.com/edubz99/food-recipes',
      preview: 'https://codepen.io/edubz99/pen/gjOLKq'
    },
    image: '/images/recipe_generator.png'
  },
  {
    title: 'Google Clone',
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.HTML,
      TAGS.CSS
    ],
    description: 'Google clone with colour randomiser and night mode',
    link: {
      preview: 'https://codepen.io/edubz99/pen/mxvzjz'
    },
    image: '/images/google_clone.png'
  },
  {
    title: 'Weather App',
    tags: [TAGS.JAVASCRIPT, TAGS.CSS, TAGS.HTML],
    description: 'A simple weather app made written in Vanilla Javascript',
    link: {
      github: 'https://codepen.io/edubz99/pen/xjWLzd',
      preview: 'https://codepen.io/edubz99/pen/xjWLzd'
    },
    image: '/images/weather_app.png'
  }
]
