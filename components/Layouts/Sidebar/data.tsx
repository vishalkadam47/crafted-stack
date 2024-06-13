import { PackageSearch, Newspaper, User, UserSearch } from 'lucide-react';

export const NavRoutes = [
  // {
  //   id: '1',
  //   title: 'Projects',
  //   icon: <Home />,
  //   link: '/projects',
  //   authGuard: false,
  // },
  {
    id: '2',
    title: 'Mates',
    icon: <UserSearch />,
    link: '/mates',
    authGuard: false,
  },
  {
    id: '3',
    title: 'Profile',
    icon: <User />,
    link: '/profile',
    authGuard: true,
    addUsername: true,
  },
  {
    id: '4',
    title: 'Blogs',
    icon: <Newspaper />,
    link: '/blogs',
    authGuard: false,
  },
  {
    id: '5',
    title: 'Resources',
    icon: <PackageSearch />,
    link: '/blogs',
    authGuard: false,
  },
];
