import Image from 'next/image'
import ben from '@/public/assets/ben.png'
import IconTwitter from "@/public/assets/twitter";
import IconYoutube from "@/public/assets/youtube";
import IconGithub from "@/public/assets/github";
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {

  const SOCIAL = {
    email: "abdurrahmanalpturan13@gmail.com",
    github: "https://github.com/alpturan-dev",
    youtube: "https://www.youtube.com/@abdurrahmanalpturan",
    twitter: "https://twitter.com/alpturandev"
  }

  return (
    <div>
      <Head>
        <meta name="description" content="Abdurrahman Alpturan" />
        <meta name="keywords" content="Abdurrahman Alpturan, Alpturan Abdurrahman" />
        <meta name="author" content="Abdurrahman Alpturan" />
      </Head>
      <main className="pt-40 flex min-h-screen flex-col items-center gap-10">
        <div className="w-3/5 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 xl:gap-10">
          <div className="w-3/4 sm:w-2/4 md:w-2/5 rounded">
            <Image className="rounded-lg saturate-0 transition-all duration-700 hover:saturate-100" src={ben} width={800} height={600} alt="Abdurrahman Alpturan" />
          </div>
          <div className="w-full md:w-4/5 lg:w-full text-center lg:text-left">
            <p className="text-2xl lg:text-3xl font-semibold">Merhaba, ben Abdurrahman.</p>
            <p className="text-xs lg:text-sm font-light">Web Developer</p>
            <div className="flex gap-4 md:gap-6 items-center justify-center lg:justify-start pt-10">
              <Link className="hover:opacity-70" href={SOCIAL.twitter}>
                <IconTwitter />
              </Link>

              <Link className="hover:opacity-70" href={SOCIAL.youtube}>
                <IconYoutube />
              </Link>

              <Link className="hover:opacity-70" href={SOCIAL.github}>
                <IconGithub />
              </Link>

              <Link className="hover:opacity-70" href={`mailto:${SOCIAL.email}`}>
                <span className="text-sm">Email</span>
              </Link>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
