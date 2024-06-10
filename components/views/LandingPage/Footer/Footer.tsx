import React from 'react';
import Link from 'next/link';
import { icons, legalLinks, usefulLinks } from './data';
import { maintainers } from '@/data';
import { SiBuymeacoffee } from 'react-icons/si';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Icons = icons.map((social) => ({
  id: social.id,
  link: social.link,
  name: social.name,
}));

const FooterLink = ({
  href,
  target,
  children,
}: {
  href: string;
  target?: string;
  children?: React.ReactNode;
}) => (
  <Link href={href} target={target}>
    <span className="cursor-pointer text-sm font-light text-muted-foreground hover:text-gray-900 dark:hover:text-gray-300">
      {children}
    </span>
  </Link>
);

export const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="bg-black text-white dark:bg-black dark:text-white">
      <div className="mx-auto max-w-screen-lg px-4 py-8 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connect with Us */}
          <div>
            <h2 className="mb-4 text-base font-normal dark:text-gray-300 md:text-lg">
              Connect with Us
            </h2>
            <ul>
              {Icons.map((social) => (
                <li key={social.id}>
                  <FooterLink href={social.link} target="_blank">
                    {social.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-4 text-base font-normal dark:text-gray-300 md:text-lg">
              Useful Links
            </h2>
            <ul>
              {usefulLinks.map((item, idx) => (
                <li key={idx}>
                  <FooterLink href={item.link}>{item.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-4 text-base font-normal dark:text-gray-300 md:text-lg">
              Legal
            </h2>
            <ul>
              {legalLinks.map((item, idx) => (
                <li key={idx}>
                  <FooterLink href={item.link} target={item.target}>
                    {item.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h2 className="mb-4 text-base font-normal dark:text-gray-300 md:text-lg">
              Designed by
            </h2>
            <div className="mb-4 flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-2">
                {maintainers.map((maintainer, index) => (
                  <div
                    className="transition-all hover:z-10 hover:-translate-y-1"
                    style={{ marginLeft: index > 0 ? -20 : 0 }}
                    key={index}
                  >
                    <Link
                      href={`${maintainer.github}/?ref=projectmate.net`}
                      target="_blank"
                    >
                      <Avatar className="h-8 w-8 md:h-10 md:w-10">
                        <AvatarImage src={maintainer.avatar} />
                        <AvatarFallback>{maintainer.name[0]}</AvatarFallback>
                      </Avatar>
                    </Link>
                  </div>
                ))}
                {/* <Link
                  href="https://github.com/vishalkadam47/crafted-stack/graphs/contributors"
                  target="_blank"
                >
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    and others
                  </span>
                </Link> */}
                <Link
                  href="https://www.buymeacoffee.com/vishalkadam47"
                  target="_blank"
                  className="mt-5 animate-buttonheartbeat rounded-full border p-2 shadow hover:cursor-pointer hover:bg-[#FFDC03]/80"
                >
                  <SiBuymeacoffee className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm font-normal text-black/70 dark:text-white/70">
          <p>©️ The Union for VFX & Animation - INDIA - {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};
