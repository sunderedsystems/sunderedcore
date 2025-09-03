// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sundered SRD',
  tagline: 'Reality Frays. Power is unbound.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://core.sunderedsystems.com',
  baseUrl: '/',

  organizationName: 'sunderedsystems',
  projectName: 'sunderedcore',
  deploymentBranch: 'gh-pages',    // ✅ deploys clean to gh-pages
  trailingSlash: false,            // ✅ avoids duplicate slugs

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

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Sundered logo',
        src: 'img/inv.logo.png',
        srcDark: 'img/logo.png',
        href: '/',
      },
      items: [
        {label: 'Play Now', to: '/docs/play-now', position: 'left'},
        {label: 'Sundered Creator License', to: '/docs/SCL', position: 'left'},
        {href: 'https://s5e.sunderedsystems.com', label: 'Sundered 5e', position: 'right'},
        {href: 'https://sunderedsystems.com', label: 'Devlog', position: 'right'},
        {href: 'https://github.com/sunderedsystems/sundered5e', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.gg/ywhsncnf2S'},
            {label: 'TikTok', href: 'https://www.tiktok.com/@sunderedsystems'},
            {label: 'Instagram', href: 'https://www.instagram.com/sunderedsystems'},
            {label: 'Reddit', href: 'https://www.reddit.com/r/sunderedsystems'},
          ],
        },
        {
          title: 'Legal',
          items: [{label: 'Sundered Creator License', to: '/docs/SCL'}],
        },
        {
          title: 'More',
          items: [{label: 'GitHub', href: 'https://github.com/sunderedsystems/sundered5e'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sundered Systems.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {hashed: true},
    ],
  ],
};

export default config;
