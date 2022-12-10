import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
  DocumentTextIcon,
  PhoneIcon
} from "@heroicons/react/outline";
import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "React Resume Template",
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello World.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm BlackBerry, my alias.
        <br />
        <strong className="text-stone-100">A front-end engineer</strong>, but I
        also like <strong className="text-stone-100">python</strong>,{" "}
        <strong className="text-stone-100">java</strong> ...
        <br />
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        now, I work in
        <strong className="text-stone-100"> Shanghai </strong>
        <br />I am mainly responsible for the front-end infrastructure and some
        business.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I like{" "}
        <strong className="text-stone-100">Sports</strong>,&nbsp;
        <strong className="text-stone-100">Basketball</strong>,&nbsp;
        <strong className="text-stone-100">Music</strong> and so on...
      </p>
    </>
  ),
  actions: [
    {
      href: "/docs/intro/",
      text: "Notes",
      primary: true,
      Icon: DocumentTextIcon,
      debounce: true
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Concat",
      primary: false,
      Icon: PhoneIcon
    },
  ],
};
/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      Coding与美食都不可辜负，对事物保持好奇，喜欢拓展知识边界。
      <br />
      喜欢旅游，热爱祖国的山川大海，用脚步丈量生活。
    </>
  ),
  aboutItems: [
    { label: "Location", text: "中国·上海", Icon: MapIcon },
    { label: "Age", text: "25", Icon: CalendarIcon },
    { label: "Nationality", text: "中国·四川", Icon: FlagIcon },
    {
      label: "Interests",
      text: "🏀，🎵，🏃🏻，🍚",
      Icon: SparklesIcon,
    },
    { label: "Study", text: "西安建筑科技大学", Icon: AcademicCapIcon },
    {
      label: "Employment",
      text: "Huolala",
      Icon: OfficeBuildingIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Frontend development",
    skills: [
      {
        name: "Vue",
        level: 8,
      },
      {
        name: "React",
        level: 8,
      },
      {
        name: "Typescript",
        level: 8,
      },
      {
        name: "Webpack",
        level: 5,
      },
      {
        name: "Rollup",
        level: 5,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 8,
      },
      {
        name: "Java",
        level: 5,
      },
      {
        name: "Golang",
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Project title 1",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 2",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 3",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 4",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 5",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 6",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 7",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 8",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 9",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage1,
  },
  {
    title: "Project title 10",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage10,
  },
  {
    title: "Project title 11",
    description: "Give a short description of your project here.",
    url: "https://blackberry009.github.io",
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "2016-2020",
    location: "陕西西安",
    title: "西安建筑科技大学",
    content: <p>🐟🐟🐟🐟🐟</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: "2020-2021",
    location: "中国·上海 基础设施",
    title: "途虎养车",
    content: <p>负责 Node 生态建设，承接部分业务。</p>,
  },
  {
    date: "2021-2022",
    location: "中国·上海 基础设施",
    title: "货拉拉",
    content: <p>负责 CI/CD 以及周边生态，完善前端工程化平台。承接部分业务</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: "John Doe",
    //   text: "Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.",
    //   image:
    //     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    // },
    // {
    //   name: "Jane Doe",
    //   text: "Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).",
    //   image:
    //     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    // },
    // {
    //   name: "Someone else",
    //   text: "Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.",
    //   image:
    //     "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
    // },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "联系方式.",
  description: "期待和大家交流学习.",
  items: [
    {
      type: ContactType.Email,
      text: "baymax97@163.com",
      href: "mailto:baymax97@163.com",
    },
    {
      type: ContactType.Location,
      text: "中国·上海",
      href: "https://www.google.ca/maps/place/%E4%B8%AD%E5%9B%BD%E4%B8%8A%E6%B5%B7%E5%B8%82/@31.2231336,120.9162536,9z/data=!3m1!4b1!4m5!3m4!1s0x35b27040b1f53c33:0x295129423c364a1!8m2!3d31.230416!4d121.473701",
    },
    {
      type: ContactType.Github,
      text: "blackberry009",
      href: "https://github.com/BlackBerry009",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // { label: "Github", Icon: GithubIcon, href: "https://github.com/tbakerx" },
  // {
  //   label: "Stack Overflow",
  //   Icon: StackOverflowIcon,
  //   href: "https://stackoverflow.com/users/8553186/tim-baker",
  // },
  // {
  //   label: "LinkedIn",
  //   Icon: LinkedInIcon,
  //   href: "https://www.linkedin.com/in/timbakerx/",
  // },
  // {
  //   label: "Instagram",
  //   Icon: InstagramIcon,
  //   href: "https://www.instagram.com/tbakerx/",
  // },
  // {
  //   label: "Twitter",
  //   Icon: TwitterIcon,
  //   href: "https://twitter.com/TimBakerx",
  // },
];
