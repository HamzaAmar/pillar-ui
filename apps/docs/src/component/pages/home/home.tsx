/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Heading,
  Text,
  Flex,
  Paper,
  Grid,
  IconButton,
  Avatar,
  Input,
  Chips,
  Badge,
  Switch,
  Alert,
} from '@pillar-ui/core'
import { useDarkMode } from '@pillar-ui/hooks'

import { Github, Booking, Discord, Linkdin, Youtube, Dollar, Moon, Sun } from '@pillar-ui/icons'
import { ACCESSIBILITY, COMING_SUPPORT, SIMPLE_DEVELOPMENT, SUPPORTED } from './home.data'
import Link from 'next/link'
import React, { CSSProperties, useState } from 'react'

function AccessibleSection() {
  return (
    <Paper corner="lg" p="lg" flow="xl">
      <div>
        <Text color="primary" contrast="low" size="lg">
          Our Commitment
        </Text>
        <Heading transform="uppercase" className="highlight" as="h2" size="2xl">
          Building Accessible Experiences
        </Heading>
      </div>
      <Grid gap="md" grid="1fr 1fr 1fr" md="1fr 1fr" sm="1fr">
        {ACCESSIBILITY.map(({ id, title, description, icon }) => (
          <Paper className="accessibility--item" key={id} flow="2xs">
            {icon}
            <div className="l_flow__3xs">
              <Heading as="h3" size="lg">
                {title}
              </Heading>
              <Text color="surface" contrast="low">
                {description}!
              </Text>
            </div>
          </Paper>
        ))}
      </Grid>
    </Paper>
  )
}

function HeroSection() {
  return (
    <Flex as="section" direction="column" gap="xl" justify="center" className="hero">
      <h1 className="hero--heading">
        <Text as="span" className="pillar--title">
          <svg
            className="pillar--title-container"
            stroke="#000"
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

        <Text color="surface" contrast="low">
          Currently, this library only supports React, but we are actively working on adding support for (Qwik, and Vue)
        </Text>
      </div>

      <Flex gap="sm">
        <Button as={Link} href="/docs/getting-started/cra" icon={<Booking />}>
          Get Started
        </Button>

        <Button color="surface" variant="outline" icon={<Dollar />}>
          Donation
        </Button>
      </Flex>

      <Flex justify="end" gap="sm">
        <IconButton color="surface" variant="soft" title="Go to Github" icon={<Github />} />
        <IconButton color="surface" variant="soft" title="Go to Discord" icon={<Discord />} />
        <IconButton color="surface" variant="soft" title="Go to Discord" icon={<Discord />} />
        <IconButton color="surface" variant="soft" title="Go to Youtube" icon={<Youtube />} />
        <IconButton color="surface" variant="soft" title="Go to Linkdin" icon={<Linkdin />} />
      </Flex>
      <div></div>
    </Flex>
  )
}

function CustomThemeSection() {
  return (
    <Paper corner="lg" p="lg" flow="xl" className="section">
      <div>
        <Heading className="highlight" as="h2" size="3xl" transform="capitalize">
          Customize You Theme
        </Heading>
        <div className="l_flow__sm">
          <Text color="surface" contrast="low" size="lg">
            We understand that everyone has different needs and preferences. That&#39;s why we offer a wide range of
            customization options for our project. You can change the colors, fonts, and layout to match your brand or
            style.
          </Text>
          <Text color="surface" contrast="low" size="lg">
            We recognize the uniqueness of every user. With our easy-to-use customization features, tailor your project
            to fit your brand&apos;s look and feel. Click on the Change Theme button at the page&apos;s top to access a
            variety of themes, each with distinct colors, fonts, and layouts. Simply select your desired theme to see
            the changes in real time. If it&apos;s not quite right, feel free to explore more options or revert as
            needed. Your perfect theme awaits!
          </Text>
        </div>
      </div>
      <div className="h_image-container">
        <img className="h_image" src="/themeChange.png" alt="theme change" />
      </div>
    </Paper>
  )
}

function SimplifyDevelopment() {
  return (
    <Paper corner="lg" p="lg" flow="lg">
      <div>
        <Text color="primary" contrast="low" size="lg">
          Deliver Projects Faster
        </Text>
        <Heading className="highlight" as="h2" size="3xl" transform="capitalize">
          Effortless UI with Pillar UI
        </Heading>
      </div>
      <Grid grid="1fr 1fr 1fr" lg="1fr 1fr" md="1fr" gap="md">
        {SIMPLE_DEVELOPMENT.map(({ title, id, description }) => (
          <Paper borderColor="opacity-6" key={id} background="surface-3" shadow="xs" corner="sm" p="sm" flow="sm">
            <Heading as="h3" size="lg">
              {title}
            </Heading>
            <Text transform="capitalize" color="surface" contrast="low">
              {description}
            </Text>
          </Paper>
        ))}
      </Grid>
    </Paper>
  )
}

function PillarSupport() {
  return (
    <Paper corner="lg" p="lg" flow="lg">
      <Heading className="highlight" transform="capitalize" as="h2" size="2xl">
        Integrated Frameworks
      </Heading>
      <Text color="surface" contrast="low" size="lg">
        At Pillar UI, we believe in providing a seamless development experience by offering compatibility with a wide
        range of popular frameworks. Our UI library can be effortlessly integrated into your projects, whether
        you&#39;re using Vite, Create React App, Next.js, Remix, or Gatsby. In the future, we plan to add support for
        Vite, Qwik, and Svelte JS. Stay tuned!
      </Text>
      <Grid gap="md" grid="repeat(4, 1fr)" md="repeat(3, 1fr)" sm="1fr 1fr">
        {SUPPORTED.map(({ slug, title, icon }) => (
          <Paper
            as={Flex}
            direction="column"
            borderColor="opacity-6"
            justify="between"
            key={slug}
            corner="lg"
            background="surface-5"
            className="supported-item"
          >
            <Flex
              as={Paper}
              background="surface-5"
              direction="column"
              items="center"
              justify="center"
              p="sm"
              className="l_flex-1"
            >
              {icon}
            </Flex>
            <Paper align="center" as={Text} weight="medium" transform="uppercase" className="supported-title" p="xs">
              {title}
            </Paper>
          </Paper>
        ))}
      </Grid>
      <Heading className="highlight" transform="capitalize" as="h3" size="2xl">
        Expanding Our Reach
      </Heading>
      <Text color="surface" contrast="low" size="lg">
        Looking towards the future, we are committed to expanding the reach of our design system to support additional
        frameworks, ensuring that developers using Svelte, Vue, and Qwik can also benefit from our comprehensive set of
        UI components and design principles.
      </Text>
      <Grid gap="md" grid="repeat(4, 1fr)" md="repeat(3, 1fr)" sm="1fr 1fr">
        {COMING_SUPPORT.map(({ slug, title, icon }) => (
          <Paper
            as={Flex}
            direction="column"
            borderColor="opacity-6"
            justify="between"
            key={slug}
            corner="lg"
            background="surface-5"
            className="supported-item"
          >
            <Flex
              as={Paper}
              p="sm"
              background="surface-5"
              direction="column"
              items="center"
              justify="center"
              className="l_flex-1"
            >
              {icon}
            </Flex>
            <Paper align="center" as={Text} weight="medium" transform="uppercase" className="supported-title" p="xs">
              {title}
            </Paper>
          </Paper>
        ))}
      </Grid>
    </Paper>
  )
}

function DarkMode() {
  const { isDark, mode, toggleMode } = useDarkMode()

  return (
    <Paper items="center" justify="center" as={Flex} corner="lg" p="lg" flow="lg" className={`${mode} section`}>
      <div className="l_flow__lg">
        <div className="l_flow__md">
          <div className="l_flow__2xs">
            <Text size="lg" color="primary" contrast="low">
              Subtle, Soothing, Smart
            </Text>
            <Heading className="highlight" size="3xl" transform="uppercase" as="h2">
              Night Mode: Effortless Elegance
            </Heading>
          </div>
          <Text className="dark--description" color="surface" contrast="low" size="xl">
            Switch to dark mode with ease. Our useDarkMode hook ensures a smooth, flicker-free experience, compatible
            with major frameworks.
          </Text>
          <Text className="dark--description" color="surface" contrast="low" size="xl">
            Our styles are dark mode-ready from the start. Simply add <code>class=&quot;dark&quot;</code> to your
            elements, and watch them transform.
          </Text>
        </div>
        <Flex gap="sm" wrap>
          <Button
            color={isDark ? 'primary' : 'surface'}
            variant={isDark ? 'solid' : 'outline'}
            onClick={toggleMode}
            size="md"
            icon={isDark ? <Sun /> : <Moon />}
            data-mode={mode}
          >
            {isDark ? 'light' : 'dark'}
          </Button>
        </Flex>
      </div>

      <svg
        className="under top--start"
        stroke={isDark ? 'var(--warning-11)' : 'var(--surface-8)'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        stroke-width="12"
        viewBox="0 0 265 265"
        fill="none"
      >
        <path d="M181 104c-22-43-93-33-103 13-7 29 19 48 23 75h59l8-21c5-11 13-18 15-30 3-11 3-27-2-37Z" />
        <path
          d="m100 228-1-25c0-3 0-7 3-9 4-4 10-4 15-4h28c5 0 11-1 15 1s5 8 5 12c1 7 3 23-3 28-4 4-10 5-15 5-13 2-47 1-47-8Z"
          clip-rule="evenodd"
        />
        <path d="m135 237-1 13M31 169l14-7M31 74l16 10M134 35V15M214 79l20-12M203 168l15 14" />
      </svg>
      <svg
        className="under under--end"
        stroke={isDark ? 'var(--warning-11)' : 'var(--surface-8)'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        stroke-width="12"
        viewBox="0 0 265 265"
        fill="none"
      >
        <path d="M181 104c-22-43-93-33-103 13-7 29 19 48 23 75h59l8-21c5-11 13-18 15-30 3-11 3-27-2-37Z" />
        <path
          d="m100 228-1-25c0-3 0-7 3-9 4-4 10-4 15-4h28c5 0 11-1 15 1s5 8 5 12c1 7 3 23-3 28-4 4-10 5-15 5-13 2-47 1-47-8Z"
          clip-rule="evenodd"
        />
        <path d="m135 237-1 13M31 169l14-7M31 74l16 10M134 35V15M214 79l20-12M203 168l15 14" />
      </svg>
    </Paper>
  )
}

const FEATURES = [
  {
    id: '1',
    title: 'Inclusive Experiences:',
    description: 'Seamless support for any RTL language.',
    icon: '🌐',
  },
  {
    id: '2',
    title: 'Intuitive Design:',
    description: 'Automatic text alignment and visual order for a natural feel.',
    icon: '✨',
  },
  {
    id: '3',
    title: 'Pre-Built RTL Components:',
    description: 'Effortlessly create interfaces that work across languages.',
    icon: '🔨',
  },
  {
    id: '4',
    title: 'Flexible Customization:',
    description: "Add `dir='rtl'` to target specific areas for complete control.",
    icon: '🎯',
  },
  {
    id: '5',
    title: 'Accessibility Focused:',
    description: 'Design for everyone with RTL optimization at the core.',
    icon: '🤝',
  },
]

function RTLSupport() {
  return (
    <Paper as={Flex} items="center" justify="center" corner="lg" p="lg" className="section rtl--support">
      <div className="l_flow__xl">
        <div className="l_flow__sm">
          <div>
            <Text size="lg" as="span" color="primary" contrast="low">
              Effortless RTL Experiences:
            </Text>
            <Heading as="h2" size="3xl" transform="uppercase">
              Right-to-Left Support Built Right In
            </Heading>
          </div>

          <Text size="xl" color="surface" contrast="low">
            Our UI library ensures a welcoming experience for users worldwide.
          </Text>
        </div>

        <Grid grid="1fr 1fr" gap="sm" className="feature-list">
          {FEATURES.map(({ id, title, description, icon }) => (
            <Flex key={id} as="li" gap="sm" className="feature--item">
              <span className="feature-icon">{icon}</span>
              <div>
                <Heading>{title}</Heading>
                <Text contrast="low" color="surface">
                  {description}
                </Text>
              </div>
            </Flex>
          ))}
        </Grid>
      </div>
      <svg
        className="under top--start"
        stroke="var(--surface-6)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        stroke-width="6.8"
        viewBox="0 0 284 284"
        width="500"
        fill="none"
      >
        <path d="M131 129c13 4 47 19 30 38-18 21-64 8-53-23 4-12 25-15 36-16 32-5 63 2 95 7m-108-6c-27-7-57-1-83 10" />
        <path d="M45 111c0 13-9 27-17 36 18 1 29 5 39 20M234 107c6 11 14 19 23 28-13 4-23 15-30 26" />
      </svg>

      <svg
        className="under under--end"
        stroke="var(--surface-6)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        stroke-width="6.8"
        viewBox="0 0 284 284"
        width="500"
        fill="none"
      >
        <path d="M131 129c13 4 47 19 30 38-18 21-64 8-53-23 4-12 25-15 36-16 32-5 63 2 95 7m-108-6c-27-7-57-1-83 10" />
        <path d="M45 111c0 13-9 27-17 36 18 1 29 5 39 20M234 107c6 11 14 19 23 28-13 4-23 15-30 26" />
      </svg>
    </Paper>
  )
}

function Home() {
  return (
    <div>
      <HeroSection />
      <AccessibleSection />
      <SimplifyDevelopment />
      <DarkMode />
      <RTLSupport />
      <CustomThemeSection />
      <PillarSupport />
    </div>
  )
}

export default Home
