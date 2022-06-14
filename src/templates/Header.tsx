/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { LinkOut } from 'akar-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { Fade } from 'react-reveal';

import { Background } from '@components/background';
import { DropdownMenu } from '@components/dropdown';
import { Section } from '@components/layout';
import { NavbarTwoColumns } from '@components/navigation/NavbarTwoColumns';
import { menus } from '@data/index';
import { useState } from '@overmind/index';

const Header = () => {
  const router = useRouter();

  const [state, setState] = React.useState({
    isReady: false,
    isAnimationDone: false,
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

  const { fullPage } = useState().plugins;

  return (
    <Background
      color={
        fullPage?.activeSection && fullPage?.activeSection !== 'welcome'
          ? 'bg-white'
          : 'bg-transparent'
      }
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        state.isAnimationDone ? '' : ''
      }`}
    >
      <Fade top duration={750} delay={0} when={state.isReady}>
        <Section yPadding="py-6" className="relative" isHeader>
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
                        onChange={() => {}}
                        showPreview
                        classNames={{ itemsWrapper: '!mt-4 !rounded-xl' }}
                      />
                    ) : goToSectionIndex ? (
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
              <div className="rounded-full p-1 bg-black text-white">
                <FaDiscord size={14} />
              </div>
              <div className="rounded-full p-1 bg-black text-white">
                <FaTwitter size={14} />
              </div>
            </div>
          </NavbarTwoColumns>
        </Section>
      </Fade>
    </Background>
  );
};

export { Header };
