export const favicons = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon_io/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon_io/favicon-32x32.png',
  },
  { rel: 'icon', href: '/favicon_io/favicon.ico' },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '512x512',
    href: '/favicon_io/android-chrome-512x512.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon_io/android-chrome-192x192.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon_io/apple-touch-icon.png',
  },
];

export const maintainers = [
  {
    name: 'Vishal Kadam',
    avatar:
      'https://avatars.githubusercontent.com/u/107353260?s=400&u=cdd7a6c84920d51e8267e7e458de087fd27b849b&v=4',
    github: 'https://github.com/vishalkadam47',
  },
];

export const faqData = [
  {
    id: 'item-1',
    question: 'What is Crafted Stack?',
    answer: `Crafted Stack is a union built by and for VFX & Animation artists in India. We empower artists throughout their careers by providing a comprehensive suite of services, fostering a supportive community, and advocating for fair treatment within the industry.  We believe that artistic talent deserves a strong voice and a secure foundation. That's why we offer benefits, resources, and a platform for connection to help VFX and Animation artists in India thrive.`,
  },
  {
    id: 'item-2',
    question: 'Who can join Crafted Stack?',
    answer:
      "Crafted Stack welcomes all VFX and Animation artists working in India, regardless of your experience level. Whether you're a seasoned veteran or just embarking on your creative journey, Crafted Stack has something to offer you. We believe in fostering a diverse and inclusive community where emerging talent can learn from experienced professionals, and everyone has the opportunity to connect, collaborate, and grow.",
  },
  {
    id: 'item-3',
    question: 'What are the benefits of joining Crafted Stack?',
    answer:
      'Empowerment: Benefits, skills development, advocacy, industry resources, and community connection.',
  },
  {
    id: 'item-4',
    question: 'Why should I unionize with Crafted Stack?',
    answer:
      'Unionization provides a collective voice for VFX & Animation artists, allowing you to advocate for fair treatment, secure work environments, and better compensation.  Together, we can create a thriving industry where artistic talent is valued (See - Why Unionize with Crafted Stack? section for more details)',
  },
  {
    id: 'item-5',
    question: 'What are the responsibilities of union members?',
    answer:
      'Union members have a responsibility to participate in the union by attending meetings, voting on issues, and supporting union activities.  Engaged membership is crucial for a strong and effective union.',
  },
  {
    id: 'item-6',
    question: 'Do you have any other questions?',
    answer:
      'Please feel free to contact us (Discord recommended) if you have any other questions about the Union. We are always happy to help!',
  },
];

export type BenefitItem = {
  title: string;
  description: string;
};

export const benefits: BenefitItem[] = [
  {
    title: 'Insurance & Benefits',
    description:
      'Protect your career with competitive health insurance plans and other valuable benefits.',
  },
  {
    title: 'Upskilling & Development',
    description:
      'Stay ahead of the curve with workshops, online courses, and mentorship opportunities from industry veterans.',
  },
  {
    title: 'Mediation & Advocacy',
    description:
      'We have your back. Get assistance with workplace issues and access to legal representation if needed.',
  },
  {
    title: 'Industry News & Resources',
    description:
      'Stay informed about the latest trends, tools, and job openings in the Indian VFX and animation industry.',
  },
  {
    title: 'Complaint Resolution',
    description:
      'We fight for fair treatment. Report workplace issues and get support resolving them effectively.',
  },
  {
    title: 'Community Connection',
    description:
      'Network, collaborate, and share your passion with fellow VFX and animation artists in India. Crafted-Stack fosters a supportive environment for professional growth and creative exchange.',
  },
];
