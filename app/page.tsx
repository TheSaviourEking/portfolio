import { Heebo } from "next/font/google";
import ProfilePhoto from "./components/ProfilePhoto";
import Link from "next/link";
import PostCard from "./components/PostCard";
import WorkCard from "./components/WorkCard";

const heebo = Heebo({ weight: ['700'], subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPost />
      <FeaturedWorks />
    </>
  );
}

const Hero = () => {
  return (
    <div className={`${heebo.className} flex gap-8 flex-col items-center justify-between lg:flex-row-reverse`
    }>
      <div className="basis-1/2">
        <ProfilePhoto />
      </div>
      <div className="flex flex-col gap-7 basis-1/2 sm:gap-4">
        <div>
          <h1 className="text-4xl">Hello I&apos;m Saviour</h1>
          <h2 className="text-4xl">Fullstack Developer</h2>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error nihil autem consequatur ipsa illum incidunt quibusdam ea velit illo!</p>
        <a
          href="/Saviour Eking Resume.pdf"
          className="bg-accent text-text hover:bg-accent-dark transition-colors duration-300 self-start py-4 px-9 rounded-md"
          download="Saviour_Eking_Resume.pdf"
        >
          Download Resume
        </a>
      </div>
    </div >
  )
};

const RecentPost = () => {
  return (
    <div className="flex flex-col gap-3 mt-8 md:mt-2">
      <div className="flex justify-between items-center">
        <span className="text-xl">Recent Post</span>
        <Link className="hidden md:block text-base" href="/blog">view all</Link>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-4 ">
        <PostCard title='hello' />
        <PostCard title='hello' />
        {/* <PostCard title='hello' />
        <PostCard title='hello' />
        <PostCard />
        <PostCard /> */}
      </div>
      <Link className="block md:hidden text-base mt-4 md:mt-0" href="/blog">view all</Link>
    </div>
  )
};

const FeaturedWorks = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <span className="text-xl">Featured Works</span>
        <Link className="hidden md:block text-base" href="/project">view all</Link>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-4 mt-2">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <Link className="block md:hidden text-base mt-4 md:mt-0" href="/project">view all</Link>
    </div>
  )
}
