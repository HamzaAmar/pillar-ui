import React from 'react'
import { Flex, IconButton } from '@pillar-ui/core'
import { Twitter, Github, Discord, Youtube, Linkdin } from '@pillar-ui/icons'

const SOCIALS = [
  {
    href: 'https://x.com/pillar_ui',
    title: 'Go to Twitter',
    icon: <Twitter />,
  },
  {
    href: 'https://github.com/HamzaAmar/pillar-ui',
    title: 'Go to Github',
    icon: <Github />,
  },
  {
    href: 'https://discord.gg/KawwtFJG',
    title: 'Go to Discord',
    icon: <Discord />,
  },
  {
    href: 'https://www.youtube.com/@Pillar-ui',
    title: 'Go to Youtube',
    icon: <Youtube />,
  },
  {
    href: 'https://www.linkedin.com/company/pillar-ui',
    title: 'Go to LinkedIn',
    icon: <Linkdin />,
  },
]

const Socials = () => {
  return (
    <Flex gap="4">
      {SOCIALS.map((link, index) => (
        <IconButton
          key={index}
          as="a"
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          color="b"
          variant="soft"
          title={link.title}
          icon={link.icon}
        />
      ))}
    </Flex>
  )
}

export default Socials
