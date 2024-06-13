import { FC } from 'react';
import Link from 'next/link';

interface LogoProps {
  route: string;
}

export const Logo: FC<LogoProps> = ({ route }) => {
  return (
    <Link href={route}>
      <section className="relative flex items-center gap-1 text-lg font-bold uppercase md:text-2xl">
        <p>UVAI</p>
      </section>
    </Link>
  );
};
