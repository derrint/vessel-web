const menus = [
  {
    id: 1,
    label: 'Features',
    href: '/#features',
    isDesktop: true,
    isMobile: true,
    goToSectionIndex: 3,
  },
  // {
  //   id: 2,
  //   label: 'Company',
  //   href: '/company',
  //   isDesktop: true,
  //   isMobile: true,
  // },
  {
    id: 3,
    label: 'View Explorer',
    href: 'https://mainnet-explorer.openvessel.io/dashboard',
    isExternalLink: true,
    isDesktop: true,
    isMobile: true,
  },
  {
    id: 4,
    label: 'Docs',
    href: 'https://docs.openvessel.io/integration/EZzgG67O9oXGl9CReheF/',
    isExternalLink: true,
    isDesktop: true,
    isMobile: true,
  },
  {
    id: 5,
    label: 'More',
    // href: '/#features',
    isDesktop: true,
    isMobile: true,
    // goToSectionIndex: 4,
    submenus: [
      {
        id: 'faq',
        label: 'FAQ',
        href: '/#faq',
        goToSectionIndex: 9,
      },
      {
        id: 'pp',
        label: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        id: 'tos',
        label: 'Terms of Service',
        href: '/terms-of-service',
      },
    ],
  },
];

export default menus;
