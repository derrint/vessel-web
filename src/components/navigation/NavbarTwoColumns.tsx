import { ReactNode } from 'react';

import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import Router from 'next/router';
import { FiMenu } from 'react-icons/fi';

import { DropdownMenu } from '@components/dropdown';
import { menus } from '@data/index';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const LinkOutIcon = <LinkOut strokeWidth={3} size={16} />;

  const menusMapped = menus
    .filter((x) => x.isMobile)
    .map((item) => {
      return {
        ...item,
        icon: item.isExternalLink ? LinkOutIcon : null,
      };
    });

  return (
    <div className="flex flex-wrap justify-between items-center">
      <div>
        <Link href="/">
          <a>{props.logo}</a>
        </Link>
      </div>

      <nav>
        <ul className="navbar hidden md:flex items-center text-xl gap-4 lg:gap-8">
          {props.children}
        </ul>

        <DropdownMenu
          title={
            <div id="mobile-header-menu-button">
              <FiMenu size={24} />
            </div>
          }
          items={menusMapped}
          onChange={(v: any) => {
            const clickedMenu = menus.find((x) => x.id === v);
            if (clickedMenu?.isExternalLink) {
              window.open(clickedMenu?.href);
            } else {
              Router.push(clickedMenu?.href as any);
            }
          }}
          classNames={{
            wrapper: 'md:hidden flex',
            itemsWrapper: 'w-full !m-0 top-[64px] left-0 rounded-none',
            items: 'gap-2 flex flex-col',
            itemText: 'font-bold',
          }}
        />
      </nav>

      {/* <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style> */}
    </div>
  );
};

export { NavbarTwoColumns };
