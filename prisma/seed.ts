/* eslint-disable @typescript-eslint/no-var-requires */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const technologies = [
  'react',
  'node',
  'mongodb',
  'python',
  'sql',
  'R',
  'matlab',
  'c#',
  'java',
];

const generateRandomTags = (quantity?: number) => {
  const shuffled = technologies.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, quantity);
};

const projectData = [
  {
    title: 'UVAI',
    description: 'The Union for VFX & Animation - INDIA.',
    content: '',
    githubRepository: 'https://github.com/vishalkadam47/crafted-stack',
    coverImg: 'https://miro.medium.com/max/1400/1*htbUdWgFQ3a94PMEvBr_hQ.png',
    tags: generateRandomTags(3),
  },
];

async function main() {
  await prisma.$connect();
  await prisma.user.upsert({
    where: {
      email: 'uvai@dev.com',
    },
    update: {},
    create: {
      email: 'uvai@dev.com',
      name: 'UVAI-DEV',
      image: null,
      emailVerified: null,
      project: {
        create: projectData,
      },
    },
  });
}

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
