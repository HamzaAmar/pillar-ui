import { Booking, Discord, Dollar, Github, Linkdin, Youtube } from '@pillar-ui/icons'
import Link from 'next/link'
import { Button, Flex, IconButton, Text } from '@pillar-ui/core'

export function Hero() {
  return (
    <Flex as="section" direction="column" gap="xl" justify="center" className="section hero">
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
      <div className="l_f-md">
        <p className="hero-txt">
          A React UI library offering reusable ui components, React hooks, icons and utilities for building React
          applications quickly and easily.
        </p>

        <Text color="b" low>
          When building this library, we focused on two key aspects: accessibility and performance. You can assess the
          library&apos;s size and compare it to other libraries to see the difference.{' '}
        </Text>
      </div>

      <Flex gap="sm">
        <Button as={Link} href="/docs/getting-started/cra" icon={<Booking />}>
          Get Started
        </Button>

        <Button color="b" variant="outline" icon={<Dollar />}>
          Donation
        </Button>
      </Flex>

      <Flex justify="end" gap="sm">
        <IconButton color="b" variant="soft" title="Go to Github" icon={<Github />} />
        <IconButton color="b" variant="soft" title="Go to Discord" icon={<Discord />} />
        <IconButton color="b" variant="soft" title="Go to Youtube" icon={<Youtube />} />
        <IconButton color="b" variant="soft" title="Go to Linkdin" icon={<Linkdin />} />
      </Flex>
    </Flex>
  )
}
