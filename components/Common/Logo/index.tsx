import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  route: string;
}

export const Logo: FC<LogoProps> = ({ route }) => {
  return (
    <Link href={route}>
      <section className="relative flex items-center gap-1 text-lg font-bold uppercase md:text-2xl">
        {/* <Image src="/logo.png" alt="UVAI Logo" width={50} height={50} /> */}
        <p>UVAI</p>
      </section>
    </Link>
  );
};
