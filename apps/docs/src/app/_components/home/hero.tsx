import {
  ArrowCircleTop,
  Booking,
  Discord,
  Dollar,
  Github,
  Id,
  Linkdin,
  ThumbUp,
  Twitter,
  Youtube,
} from '@pillar-ui/icons'
import Link from 'next/link'
import { Button, Flex, Grid, Heading, IconButton, Paper, Text } from '@pillar-ui/core'
import { CSSProperties } from 'react'
import Socials from '../social'

const BUNDLE_SIZE_PROJECTS = [
  {
    id: 'pillar-ui',
    name: 'Pillar UI',
    size: '11.0KB',
    link: 'https://bundlephobia.com/package/@pillar-ui/core@0.11.3',
    winner: true,
  },
  {
    id: 'radix-themes',
    name: 'Radix themes',
    size: '90.7kB',
    link: 'https://bundlephobia.com/package/@radix-ui/themes@3.1.6',
    winner: false,
  },
  {
    Id: 'mui',
    name: 'Material UI',
    size: '141.9kB+',
    link: 'https://bundlephobia.com/package/@mui/material@6.4.0',
    winner: false,
  },
  {
    id: 'mantine-ui',
    name: 'Mantine UI',
    size: '139.6kB',
    link: 'https://bundlephobia.com/package/@mantine/core@7.16.1',
    winner: false,
  },
  {
    id: 'chakra-ui',
    name: 'Chakra UI',
    size: '290kB+',
    link: 'https://bundlephobia.com/package/@chakra-ui/react@3.4.0',
    winner: false,
  },
  {
    id: 'antd',
    name: 'Antd',
    size: '449.5kB',
    link: 'https://bundlephobia.com/package/antd@5.23.2',
    winner: false,
  },
  {
    id: 'heroui',
    name: 'Heroui UI',
    size: '513.7kB',
    link: 'https://bundlephobia.com/package/@heroui/react@2.6.14',
    winner: false,
  },
]

function BundleItem({ name, size, link, index }: any) {
  return (
    <Paper
      style={{ '--B_STEP': index + 1 } as CSSProperties}
      className="hero-bundle"
      as={Flex}
      justify="between"
      items="center"
      gap="2"
      p="5"
    >
      <Flex gap="4" items="center">
        <div className="hero-bundle-counter"></div>
        <Text weight="5" size="6">
          {name}
        </Text>
      </Flex>
      <Flex gap="4" items="center">
        <Text size="4" color="b" low>
          {size}
        </Text>
        <IconButton
          title="Bundlephobia Link"
          as="a"
          variant="soft"
          href={link}
          target="_blank"
          rel="noreferrer"
          icon={<ArrowCircleTop />}
          size="3"
        />
      </Flex>
    </Paper>
  )
}

export function Hero() {
  return (
    <Grid gap="9" items="center" cols={{ default: '1fr', lg: '2.5fr 1fr' }} className="section hero">
      <Flex as="section" direction="col" gap="7" justify="center">
        <h1 className="hero-hdg">
          <Text as="span" className="hero-ttl">
            <svg
              className="hero-svg"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
              strokeWidth="4.1"
              viewBox="0 0 458 152"
              fill="none"
            >
              <path d="M448 132c3-35 9-83 2-116-104-3-207-4-311-2-40 1-83 8-122 4l3 92c0 13 5 27 4 39 116 0 233-11 349-7 23 0 45-3 68 0-59-5-120-1-179 0-39 0-79-6-118-5-38 0-75 7-112 7C23 99 11 54 5 9c24-1 48-4 71-4 127-1 253 0 380 6-1 40-10 78-13 118-3-41 6-83 3-124-15-3-34-1-49-1-42-1-83-2-125 0-53 1-105 4-157 6-36 2-77-1-112 7l12 131" />
            </svg>
            Pillar UI
          </Text>
          : Is a Lightweight, Accessible React UI Library
        </h1>
        <div className="Sf-4">
          <p className="hero-txt">
            A React UI library offering reusable ui components, React hooks, icons and utilities for building React
            applications quickly and easily.
          </p>

          <Text color="b" low>
            When building this library, we focused on two key aspects: accessibility and performance. You can assess the
            library&apos;s size and compare it to other libraries to see the difference.{' '}
          </Text>
        </div>

        <Flex gap="4">
          <Button as={Link} href="/docs/getting-started/cra" icon={<Booking />}>
            Get Started
          </Button>

          <Button color="b" variant="outline" icon={<Dollar />}>
            Donation
          </Button>
        </Flex>

        <Socials />
      </Flex>
      <Paper flow="9">
        <Paper flow="4" className="hero-bundles">
          <Text size="8" low color="b" weight="3" className="text-animation">
            Bundle Size comparison
          </Text>
          {BUNDLE_SIZE_PROJECTS.map(({ id, ...rest }, index) => (
            <BundleItem key={id} {...rest} index={index} />
          ))}
        </Paper>
      </Paper>
    </Grid>
  )
}
