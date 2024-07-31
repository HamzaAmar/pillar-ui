import { Booking, Discord, Dollar, Github, Linkdin, Youtube } from '@pillar-ui/icons'
import Link from 'next/link'
import { Button, Flex, IconButton, Text } from '~/component/core/pillar'

export function Hero() {
  return (
    <Flex as="section" direction="column" gap="xl" justify="center" className="section hero">
      <h1 className="hero--heading">
        <Text as="span" className="pillar--title">
          <svg
            className="pillar--title-container"
            stroke="var(--bg-9)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            stroke-width="4.1"
            viewBox="0 0 458 152"
            fill="none"
          >
            <path d="M448 132c3-35 9-83 2-116-104-3-207-4-311-2-40 1-83 8-122 4l3 92c0 13 5 27 4 39 116 0 233-11 349-7 23 0 45-3 68 0-59-5-120-1-179 0-39 0-79-6-118-5-38 0-75 7-112 7C23 99 11 54 5 9c24-1 48-4 71-4 127-1 253 0 380 6-1 40-10 78-13 118-3-41 6-83 3-124-15-3-34-1-49-1-42-1-83-2-125 0-53 1-105 4-157 6-36 2-77-1-112 7l12 131" />
          </svg>
          Pillar-ui
        </Text>
        Your Comprehensive, Accessible UI Toolkit with Hooks, Icons, and Utilities
      </h1>
      <div className="l_flow__md">
        <p className="hero--text">
          A comprehensive set of reusable UI components, React hooks, icons and utilities for building React
          applications quickly and easily.
        </p>

        <Text color="bg" contrast="low">
          Currently, this library only supports React, but we are actively working on adding support for (Qwik, and Vue)
        </Text>
      </div>

      <Flex gap="sm">
        <Button as={Link} href="/docs/getting-started/create-react-app" icon={<Booking />}>
          Get Started
        </Button>

        <Button color="bg" variant="outline" icon={<Dollar />}>
          Donation
        </Button>
      </Flex>

      <Flex justify="end" gap="sm">
        <IconButton color="bg" variant="soft" title="Go to Github" icon={<Github />} />
        <IconButton color="bg" variant="soft" title="Go to Discord" icon={<Discord />} />
        <IconButton color="bg" variant="soft" title="Go to Youtube" icon={<Youtube />} />
        <IconButton color="bg" variant="soft" title="Go to Linkdin" icon={<Linkdin />} />
      </Flex>
    </Flex>
  )
}
