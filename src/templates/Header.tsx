/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { FaDiscord, FaTwitter } from 'react-icons/fa';

import { Background } from '@components/background';
import { DropdownMenu } from '@components/dropdown';
import { Section } from '@components/layout';
import { NavbarTwoColumns } from '@components/navigation/NavbarTwoColumns';
import { menus } from '@data/index';
import { useActions, useState } from '@overmind/index';

const Header = () => {
  const router = useRouter();
  const { plugins, yScrollPosition, header } = useState();
  const { setYScrollPosition } = useActions();

  const [state, setState] = React.useState({
    isReady: false,
    isAnimationDone: false,
    isScrolling: false,
  });

  React.useEffect(() => {
    setTimeout(() => {
      setState({ ...state, isReady: true });
    }, 250);

    return () => {};
  }, []);

  React.useEffect(() => {
    if (state.isReady) {
      setTimeout(() => {
        setState({ ...state, isAnimationDone: true });
      }, 750);
    }

    return () => {};
  }, [state.isReady]);

  const { fullPage } = plugins;

  // -----
  // ----- on scroll logic -----
  // -----

  React.useEffect(() => {
    const onScroll = () => {
      // ----- update y scroll position -----
      setYScrollPosition(window.pageYOffset);

      // ----- set scrolling state -----
      setState({ ...state, isScrolling: true });
      if (state.isScrolling) {
        setTimeout(() => {
          setState({ ...state, isScrolling: false });
        }, 1000);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [yScrollPosition]);

  React.useEffect(() => {
    if (state.isScrolling && header.menu.isOpened) {
      const body = document.getElementById('mobile-header-menu-button');
      body?.click();
    }

    return () => {};
  }, [state.isScrolling]);

  return (
    <Background
      color={`
        ${
          fullPage?.activeSection === undefined ||
          fullPage?.activeSection === 'welcome'
            ? 'bg-transparent'
            : 'bg-white'
        }

        ${yScrollPosition > 30 ? '!bg-white' : ''}
      `}
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        state.isAnimationDone ? '' : ''
      }`}
    >
      <Section yPadding="py-5 md:py-6" className="relative" isHeader>
        <NavbarTwoColumns
          logo={
            <img
              src="/assets/images/logos/logo.png"
              alt=""
              className="h-6 md:h-8 lg:h-9 aspect-auto"
            />
          }
        >
          {menus.map(
            ({
              id,
              label,
              href,
              submenus,
              isButton,
              isDesktop,
              isMobile,
              isExternalLink,
              goToSectionIndex,
            }: any) => (
              <li
                key={id}
                className={`${
                  isDesktop && !isMobile ? 'hidden md:block' : ''
                } ${!isDesktop && isMobile ? 'md:hidden' : ''}`}
              >
                <div className="text-right">
                  {submenus ? (
                    <DropdownMenu
                      title={label}
                      items={submenus}
                      onChange={(v: any) => {
                        const currentSubmenu = submenus.find(
                          (x: any) => x.id === v
                        );
                        if (
                          router.pathname === '/' &&
                          currentSubmenu.goToSectionIndex
                        ) {
                          fullPage.methods.moveTo(
                            currentSubmenu.goToSectionIndex
                          );
                        } else {
                          Router.push(currentSubmenu?.href as any);
                        }
                      }}
                      classNames={{
                        itemsWrapper: '!mt-4 !rounded-xl',
                        button: 'font-medium',
                      }}
                    />
                  ) : router.pathname === '/' && goToSectionIndex ? (
                    <a
                      className={`text-base font-medium hover:text-primary flex items-center cursor-pointer ${
                        isButton
                          ? 'bg-primary px-4 lg:px-6 py-2 lg:py-4 rounded-full'
                          : ''
                      }
                          ${router.pathname === href ? 'text-primary' : ''}
                          `}
                      onClick={() => {
                        fullPage.methods.moveTo(goToSectionIndex);
                      }}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link href={href} passHref>
                      <a
                        className={`text-base font-medium hover:text-primary flex items-center ${
                          isButton
                            ? 'bg-primary px-4 lg:px-6 py-2 lg:py-4 rounded-full'
                            : ''
                        }
                          ${router.pathname === href ? 'text-primary' : ''}
                          `}
                        target={isExternalLink ? '_blank' : ''}
                      >
                        {label}
                        {isExternalLink && (
                          <div className="ml-2">
                            <LinkOut strokeWidth={3} size={16} />
                          </div>
                        )}
                      </a>
                    </Link>
                  )}
                </div>
              </li>
            )
          )}
          <div className="pt-1 flex items-center gap-3">
            <Link href={'https://discord.gg/DZrNRBkmzt'} passHref>
              <a target={'_blank'}>
                <div className="rounded-full p-1 bg-black text-white">
                  <FaDiscord size={14} />
                </div>
              </a>
            </Link>
            <Link href={'https://twitter.com/vesselnfts'} passHref>
              <a target={'_blank'}>
                <div className="rounded-full p-1 bg-black text-white">
                  <FaTwitter size={14} />
                </div>
              </a>
            </Link>
          </div>
        </NavbarTwoColumns>
      </Section>
    </Background>
  );
};

export { Header };
