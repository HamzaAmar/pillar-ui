import { FooterNavProps } from './footer.type'

export const FOOTER_ITEMS: FooterNavProps[] = [
  {
    title: 'Project',
    links: [
      { href: '/docs/components', text: 'UI Components' },
      { href: '/docs/icons', text: 'Icons' },
      { href: '/docs/hooks', text: 'Hooks' },
      { href: '/docs/utils', text: 'Utils' },
    ],
  },
  {
    title: 'Community',
    links: [
      { href: 'https://discord.gg/GvB865nE', text: 'Chat on Discord', external: true },
      { href: 'https://twitter.com/pillar_ui', text: 'Follow on Twitter', external: true },
      { href: 'https://github.com/HamzaAmar/pillar-ui', text: 'Follow on Github', external: true },
      { href: 'https://github.com/HamzaAmar/pillar-ui/discussions', text: 'GitHub discussions', external: true },
    ],
  },
  {
    title: 'Help',
    links: [
      {
        href: 'https://github.com/HamzaAmar/pillar-ui/issues/new?assignees=&labels=&projects=&template=bug-report-for-docs.md&title=',
        text: 'Feature',
      },
      {
        href: 'https://github.com/HamzaAmar/pillar-ui/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=',
        text: 'Report Bugs',
      },
      { href: 'https://github.com/HamzaAmar/pillar-ui/issues', text: 'Github Issues' },
      { href: 'https://github.com/HamzaAmar/pillar-ui/discussions', text: 'GitHub discussions' },
    ],
  },
]
