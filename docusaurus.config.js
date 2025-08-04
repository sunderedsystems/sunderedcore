// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sundered SRD',
  tagline: 'Reality Frays. Power is unbound.',
  favicon: 'img/favicon.ico',  // Only 1 favicon; no need for dark/light swap

  future: {
    v4: true,
  },

  url: 'https://core.sunderedsystems.com',
  baseUrl: '/',

  organizationName: 'sunderedsystems',
  projectName: 'sunderedcore',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Sundered logo',
          // LIGHT MODE LOGO
          src: 'img/inv.logo.png',         // <--- black/dark logo for light mode
          // DARK MODE LOGO
          srcDark: 'img/logo.png',         // <--- white/light logo for dark mode
          href: '/',
        },
        items: [
          {
            label: 'Sundered Rules',
            to: '/docs/welcome',
            position: 'left',
          },
          {
            label: 'Sundered Creator License',
            to: '/docs/SCL',
            position: 'left',
          },
          {
            href: 'https://s5e.sunderedsystems.com',
            label: 'Sundered 5e',
            position: 'right',
          },
          {
            href: 'https://github.com/sunderedsystems/sundered5e',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/sunderedhttps://discord.gg/wMJ2xjb6',
              },
              {
                label: 'Twitter / X',
                href: 'https://x.com/sunderedsystem',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Sundered Creator License',
                to: '/docs/SCL',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sunderedsystems/sundered5e',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sundered Systems.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
