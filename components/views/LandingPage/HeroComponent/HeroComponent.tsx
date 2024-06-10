import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User } from '@/pages';
import { ArrowDown, ArrowRight, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export const HeroComponent = ({
  userCount,
  randomUsers,
}: {
  userCount: number | null;
  randomUsers: User[] | null;
}) => {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-16 px-4 md:px-8 xl:px-0">
      <div className="relative flex flex-col items-center gap-8 overflow-hidden bg-cover bg-no-repeat">
        <h1 className="max-w-[1120px] scroll-m-20 bg-gradient-to-b text-center text-2xl font-extrabold tracking-tight dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="flex items-center gap-1 text-blue-600 dark:text-blue-600">
            The Union for VFX & Animation - INDIA
          </span>{' '}
        </h1>
        <h1 className="mb-5 text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
          Unite. Empower. Create.
        </h1>
        <p className="mx-auto max-w-2xl text-center text-sm font-light text-gray-900 dark:text-gray-300 md:text-lg">
          We believe that artistic talent deserves a strong voice and a secure
          foundation. That&apos;s why we provide a comprehensive suite of
          services designed to empower you throughout your career journey.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/projects" className="mt-5">
            <Button
              size="sm"
              className="animate-buttonheartbeat rounded-md bg-white text-sm font-semibold text-black hover:bg-white"
            >
              Get Started
            </Button>
          </Link>
          <Link
            href="https://discord.gg/pg6fG6jE"
            target="_blank"
            className="mt-5"
          >
            <Button
              size="sm"
              variant="outline"
              className="flex gap-1 text-blue-600 hover:bg-blue-100 hover:text-blue-600"
            >
              Join Discord
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://github.com/vishalkadam47/crafted-stack/discussions"
            target="_blank"
            className="mt-5 animate-buttonheartbeat rounded-full border p-2 hover:cursor-pointer hover:dark:bg-black"
          >
            <FaGithub className="h-4 w-4" />
          </Link>
        </div>
        <section className="flex flex-row gap-3">
          <ul className="flex flex-row items-center">
            {randomUsers?.map((user: User, idx: number) => (
              <li
                className="transition-all hover:z-10 hover:-translate-y-1"
                key={idx}
                style={{ marginLeft: idx > 0 ? -15 : 0 }}
              >
                <Link href={'profile/' + user.username}>
                  <Avatar className="h-8 w-8 md:h-9 md:w-9">
                    <AvatarImage src={user.image} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                </Link>
              </li>
            ))}
          </ul>
          <section>
            <section className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 text-white"
                  fill="orange"
                />
              ))}
            </section>
            <p className="text-xs font-light md:text-sm">
              loved by {userCount} registered users
            </p>
          </section>
        </section>
      </div>
      <Link href="#FeaturesComponent" className="">
        <ArrowDown className="animate-bounce" />
      </Link>
    </section>
  );
};
