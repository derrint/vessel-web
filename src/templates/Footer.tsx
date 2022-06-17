import Link from 'next/link';

import { Background } from '@components/background/Background';
import { Section } from '@components/layout/Section';

const Footer = () => {
  const menus = [
    {
      id: 1,
      label: 'Privacy Policy',
      href: '/',
    },
    {
      id: 2,
      label: 'Terms of Service',
      href: '/terms-of-service',
    },
  ];

  return (
    <Background color="bg-white">
      <Section isFooter>
        <div className="flex flex-col justify-center items-center gap-4 sm::gap-6 lg:gap-8">
          <img
            src="/assets/images/logos/logo.png"
            alt=""
            className="h-10 aspect-auto"
          />

          <nav className="">
            <ul className="navbar flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 justify-start lg:justify-end items-start sm:items-center font-medium text-xl text-gray-800">
              {menus.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Link href={item.href}>
                      <a className="font-medium text-base">{item.label}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <p className="text-base text-black/40">
            &copy; 2022 Vessel. All Rights Reserved.
          </p>
        </div>
      </Section>
    </Background>
  );
};

export { Footer };
