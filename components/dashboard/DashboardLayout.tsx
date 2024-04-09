'use client';
import React from 'react';
import { MdMenu } from 'react-icons/md';
import MazeIcon from '@/components/icons/maze-icon';
import ArticlesIcon from '@/components/icons/articles-icon';
import DashboardIcon from '@/components/icons/dashboard-icon';
import ClubsIcon from '@/components/icons/clubs-icon';
import SettingsIcon from '@/components/icons/settings-icon';
import { BiLogOut } from 'react-icons/bi';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ROUTES = {
  dashboard: {
    icon: <DashboardIcon className="text-white size-10" />,
    text: 'Dashboard',
    route: '/dashboard',
  },
  articles: {
    icon: <ArticlesIcon className="text-white size-10" />,
    text: 'Artículos',
    route: 'dashboard/articles',
  },
  auctions: {
    icon: <MazeIcon className="text-white size-10" />,
    text: 'Subastas',
    route: '/dashboard/auctions',
  },
  clubs: {
    icon: <ClubsIcon className="text-white size-10" />,
    text: 'Clubes',
    route: '/dashboard/clubs',
  },
  settings: {
    icon: <SettingsIcon className="text-white size-10" />,
    text: 'Ajustes',
    route: '/dashboard/settings',
  },
};

interface LayoutProps {
  children: React.ReactNode;
  user: any;
}

export default function Layout({ children, user }: LayoutProps) {
  const [dropdown, setDropdown] = React.useState<boolean>(false);
  const router = useRouter();

  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-white w-full">
      <nav className="lg:hidden bg-primary w-full h-24 flex justify-between px-10 items-center">
        <MazeIcon className="text-white size-16" />
        <div className="flex flex-col gap-1 justify-center items-center">
          <MdMenu
            className="text-white size-10"
            onClick={() => setDropdown((prev) => !prev)}
          />
          {dropdown && (
            <ul className="absolute top-24 right-0 bg-transparent flex flex-col">
              {Object.values(ROUTES).map((route) => (
                <li
                  key={route.text}
                  className="flex justify-between items-center gap-2 bg-primary/70 w-full h-16 hover:bg-primary transition-all px-10 py-5"
                  role="button"
                  onClick={() => router.push(route.route)}
                >
                  {route.icon}
                  <p className="text-white">{route.text}</p>
                </li>
              ))}
              <li
                className="flex justify-between items-center gap-2 bg-primary/70 w-full h-16 cursor-pointer hover:bg-primary transition-all px-10 py-5"
                role="button"
                onClick={() => signOut()}
              >
                <BiLogOut className="text-white size-8 rotate-180" />
                <p className="text-white">Cerrar sesión</p>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <aside className="bg-primary lg:flex lg:flex-col lg:w-1/5 min-h-full hidden">
        <nav className="w-full flex flex-col pt-6 items-center">
          <div className="flex justify-between w-full items-center px-20">
            <MazeIcon className="text-white size-16" />
            <div className="flex flex-col gap-1 justify-center items-center">
              <h1 className="text-3xl font-extralight">Subastas</h1>
              <h1 className="text-3xl font-extralight">SFTV</h1>
            </div>
          </div>
          <div className="bg-white/90 h-[1px] w-11/12 mt-4" />
          <div className="w-full flex justify-center mt-10">
            <ul className="flex flex-col w-full">
              {Object.values(ROUTES).map((route) => (
                <li
                  key={route.text}
                  className="flex items-center gap-2 bg-primary/70 w-full h-16 hover:bg-primary transition-all px-10 py-5"
                  role="button"
                  onClick={() => router.push(route.route)}
                >
                  {route.icon}
                  <p className="text-white">{route.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex items-center gap-2 w-full h-16 cursor-pointer hover:bg-primary transition-all px-10 py-5 mt-auto mx-auto"
            role="button"
            onClick={() => signOut()}
          >
            <BiLogOut className="text-white size-8 rotate-180" />
            <p className="text-white">Cerrar sesión</p>
          </div>
        </nav>
      </aside>
      <section className="w-4/5 flex flex-col px-16 py-12">{children}</section>
    </main>
  );
}
