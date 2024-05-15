import { Button, Heading, Text, Flex, Paper, Grid, IconButton, Avatar } from '@pillar-ui/core'
import { useDarkMode } from '@pillar-ui/hooks'
import { Github, Booking, Discord, Linkdin, Youtube, Dollar, Moon, Sun, Twitter } from '@pillar-ui/icons'
import { ACCESSIBILITY, COMING_SUPPORT, FEATURES, SIMPLE_DEVELOPMENT, SUPPORTED, USER_DATA } from './home.data'
import Link from 'next/link'
import React from 'react'

function Article({ type = 'en' }: { type?: 'ar' | 'en' }) {
  const { jobTitle, description, followers, fullName, likes } = USER_DATA[type].user
  return (
    <article dir={type === 'ar' ? 'rtl' : 'ltr'} className="user--article l_flow__sm">
      <Flex items="center" justify="between" gap="xs">
        <Flex gap="sm">
          <Avatar variant="dashed" />
          <div>
            <Text>{fullName}</Text>
            <Text color="surface" contrast="low" size="xs">
              {jobTitle}
            </Text>
          </div>
        </Flex>
        <Button> {type === 'ar' ? 'تابع' : 'Follow'}</Button>
      </Flex>
      <div>
        <Text className="article--description" color="surface" contrast="low" size="sm">
          {description}
        </Text>
      </div>
      <Flex gap="md">
        <Text size="sm">
          <Text as="span" weight="medium">
            {likes}
          </Text>{' '}
          {type === 'ar' ? 'الإعجابات' : 'Likes'}
        </Text>
        <Text size="sm">
          <Text as="span" weight="medium">
            {followers}
          </Text>{' '}
          {type === 'ar' ? 'المتابعون' : 'Followers'}
        </Text>
      </Flex>
    </article>
  )
}

function AccessibleSection() {
  return (
    <Flex direction="column" justify="center" className="section" gap="2xl">
      <div>
        <Text color="primary" contrast="low" size="lg">
          Our Commitment
        </Text>
        <Heading transform="uppercase" className="highlight" as="h2" size="2xl">
          Building Accessible Experiences
        </Heading>
      </div>
      <Grid gap="md" grid="1fr 1fr 1fr" lg="1fr 1fr" sm="1fr">
        {ACCESSIBILITY.map(({ id, title, description, icon }) => (
          <Paper className="article--item" key={id} flow="2xs">
            <div className="l_flow__xs">
              <Flex gap="sm" items="center">
                <div className="article--icon-container u_center">{icon}</div>
                <Heading as="h3" size="lg">
                  {title}
                </Heading>
              </Flex>
              <Text color="surface" contrast="low">
                {description}!
              </Text>
            </div>
          </Paper>
        ))}
      </Grid>
    </Flex>
  )
}

function HeroSection() {
  return (
    <Flex as="section" direction="column" gap="xl" justify="center" className="section hero">
      <h1 className="hero--heading">
        <Text as="span" className="pillar--title">
          <svg
            className="pillar--title-container"
            stroke="var(--surface-9)"
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
    </Flex>
  )
}

function CustomThemeSection() {
  return (
    <Paper as={Flex} items="center" justify="center" flow="xl" className="section hello-world">
      <div className="l_flow__md">
        <div>
          <Text size="lg" as="span" color="primary" contrast="low">
            Change Theme
          </Text>
          <Heading as="h2" size="3xl" transform="uppercase">
            Custom your perfect look in seconds!
          </Heading>
        </div>
        <div className="l_flow__lg">
          <Text className="dark--description" color="surface" contrast="low" size="xl">
            Customize your interface to showcase your personal flair. Adjust CSS variables for colors, fonts, and
            layouts to craft a design that’s unmistakably your own.
          </Text>
          <Text className="dark--description" color="surface" contrast="low" size="xl">
            In the theme settings, you can enhance your user experience by customizing various elements. This includes
            adjusting the size, corner details, and text transformations. You can select specific areas within the
            entire tree structure to apply these style changes, ensuring a consistent and personalized look.
          </Text>
        </div>
      </div>

      <svg viewBox="0 0 490 490" height="491" fill="none">
        <path
          fill="var(--surface-1)"
          fill-rule="evenodd"
          d="m381 112-13-7c-19-7-43-2-62-1l-86 3c-17 1-35 0-52 2-19 3-39-3-57 6-26 13-25 33-25 60l1 108c0 17 1 41 3 58 4 24 25 49 53 48 52 1 109-2 159-4 22 0 49-1 71-7 35-11 32-67 31-95 0-8-4-113-9-142-1-5-2-13-5-18"
          clip-rule="evenodd"
        />
        <g
          stroke="var(--surface-8)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="10.2"
        >
          <path d="m381 112-13-7c-19-7-43-2-62-1l-86 3c-17 1-35 0-52 2-19 3-39-3-57 6-26 13-25 33-25 60l1 108c0 17 1 41 3 58 4 24 25 49 53 48 52 1 109-2 159-4 22 0 49-1 71-7 35-11 32-67 31-95 0-8-4-113-9-142-1-5-2-13-5-18" />
          <path d="M349 133c-13-2-29 0-38 0-26-1-52 2-78 2-23 1-47 0-69 2-19 3-47-2-47 22l1 86c0 18-4 37-1 55 2 10 6 19 16 21s21 1 31 0l36-1c30-1 140-6 156-8 15-4 18-28 18-40-2-36-3-76-7-123" />
          <path d="M178 165c-13-5-22 9-24 20-1 10 7 20 16 23 5 2 12 3 17 1 21-7 20-37-1-43M133 316c3-10 9-20 16-28 7-9 14-19 25-24 42-21 83 13 102 49" />
          <path d="M228 263c-1-12 9-25 15-35 9-13 21-28 37-35 33-13 73 5 90 35" />
        </g>
      </svg>
    </Paper>
  )
}

function SimplifyDevelopment() {
  return (
    <Paper as={Flex} items="center" gap="lg" className="section">
      <div className="simplify-dev--container l_flow__xl">
        <div>
          <Text color="primary" contrast="low" size="lg">
            Deliver Projects Faster
          </Text>
          <Heading className="highlight" as="h2" size="3xl" transform="capitalize">
            Effortless UI with Pillar UI
          </Heading>
        </div>
        <Grid grid="1fr 1fr" md="1fr" gap="md">
          {SIMPLE_DEVELOPMENT.map(({ title, id, description }) => (
            <div className="article--item l_flow__2xs" key={id}>
              <Heading as="h3">{title}</Heading>
              <Text transform="capitalize" color="surface" contrast="low">
                {description}
              </Text>
            </div>
          ))}
        </Grid>
      </div>

      <svg className="simple--develope" viewBox="0 0 490 491" width="300" fill="none">
        <path
          fill="var(--surface-1)"
          fill-rule="evenodd"
          d="M224 283c-11-8-23-14-35-21-7-5-14-12-21-16-29 50-58 100-81 153 17-7 39-15 54-25 4 19 11 37 16 56 19-52 49-98 68-149"
          clip-rule="evenodd"
        />
        <path
          stroke="var(--surface-9)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="10.2"
          d="M224 283c-11-8-23-14-35-21-7-5-14-12-21-16-29 50-58 100-81 153 17-7 39-15 54-25 4 19 11 37 16 56 19-52 49-98 68-149"
        />
        <path
          fill="var(--surface-1)"
          fill-rule="evenodd"
          stroke="var(--surface-9)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="10.2"
          d="M321 256c-13 9-36 23-51 30 7 25 48 120 60 140l12-63c21 10 39 18 62 32-5-10-67-115-83-139Z"
          clip-rule="evenodd"
        />
        <path
          fill="var(--surface-1)"
          fill-rule="evenodd"
          d="M311 93c-9-1-18 2-24 9 5-13-6-30-17-36-18-10-49 3-51 25-18-32-65-17-63 20l-10-5c-30-10-49 35-28 56-27 7-37 53-8 63-31 17-10 77 26 65-2 10-3 23 3 32 10 16 34 22 49 10-1 32 47 36 60 11 21 28 64 17 67-19 7 2 15 5 23 3 24-6 35-35 23-56 28-4 45-53 4-71 15-12 17-33 4-52-7-10-24-12-33-10 4-11 4-23-3-33"
          clip-rule="evenodd"
        />
        <path
          stroke="var(--surface-9)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="10.2"
          d="M311 93c-9-1-18 2-24 9 5-13-6-30-17-36-18-10-49 3-51 25-18-32-65-17-63 20l-10-5c-30-10-49 35-28 56-27 7-37 53-8 63-31 17-10 77 26 65-2 10-3 23 3 32 10 16 34 22 49 10-1 32 47 36 60 11 21 28 64 17 67-19 7 2 15 5 23 3 24-6 35-35 23-56 28-4 45-53 4-71 15-12 17-33 4-52-7-10-24-12-33-10 4-11 4-23-3-33"
        />
        <path
          stroke="var(--surface-9)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="10.2"
          d="M265 120c-43-20-103 8-119 53-18 53-5 108 49 133 40 19 92 13 123-19a96 96 0 0 0-26-155"
        />
        <path
          stroke="var(--surface-9)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="10.2"
          d="M210 195c13-10 24-21 30-35"
        />
        <path fill="var(--surface-1)" fill-rule="evenodd" d="M241 161c-1 31 2 63 0 94v-94Z" clip-rule="evenodd" />
        <path
          stroke="var(--surface-9)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="10.2"
          d="M241 161c-1 31 2 63 0 94"
        />
        <path fill="var(--surface-1)" fill-rule="evenodd" d="M207 257c24-3 47-1 70-4l-70 4Z" clip-rule="evenodd" />
        <path
          stroke="var(--surface-9)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="1.5"
          stroke-width="10.2"
          d="M207 257c24-3 47-1 70-4"
        />
      </svg>
    </Paper>
  )
}

function PillarSupport() {
  return (
    <Flex gap="xl" justify="evenly" className="simplify-dev--container section">
      <div className="l_flow__2xl">
        <div
          className="l_flow__
        md"
        >
          <div className="l_flow__2xs">
            <Text color="primary" contrast="low" size="lg">
              Framework Harmony:
            </Text>
            <Heading className="highlight" transform="uppercase" as="h2" size="3xl">
              Effortless Integration with Pillar UI
            </Heading>
          </div>
          <Text color="surface" contrast="low" size="xl" className="dark--description">
            Pillar UI adapts to your workflow, enhancing your projects with ease. Stay ahead of the curve with support
            for emerging technologies.
          </Text>
        </div>
        <Grid
          style={{ position: 'sticky', top: '8rem' }}
          items="center"
          gap="xl"
          grid="repeat(auto-fit, minmax(180px, 1fr))"
        >
          {SUPPORTED.map(({ slug, icon }) => (
            <div key={slug}>{icon}</div>
          ))}
        </Grid>
      </div>
      <div className="support--second l_flow__sm">
        <div className="get-started l_flow__sm">
          <Heading>Lets Getting Start</Heading>
          <Text size="sm" color="surface" contrast="low">
            Build faster and lighter. Experience the power of our streamlined design system.
          </Text>
          <Button>Get Started</Button>
        </div>
        <div className="get-started l_flow__sm">
          <Heading>Community</Heading>
          <Text size="sm" color="surface" contrast="low">
            Get involved in our community. Everyone is welcome!
          </Text>
          <Flex gap="sm">
            <IconButton size="sm" icon={<Twitter />} title="Connect With Twitter" />
            <IconButton size="sm" icon={<Github />} title="Connect With Github" />
            <IconButton size="sm" icon={<Discord />} title="Connect With Twitter" />
          </Flex>
        </div>
      </div>
    </Flex>
  )
}

function DarkMode() {
  const { isDark, mode, toggleMode } = useDarkMode()

  return (
    <Paper items="center" justify="between" as={Flex} flow="lg" className={`${mode} section`}>
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
        stroke={isDark ? 'var(--warning-11)' : 'var(--surface-8)'}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        stroke-width="12"
        viewBox="0 0 265 265"
        width="265"
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

function RTLSupport() {
  return (
    <Paper as={Grid} grid="1.7fr 1fr" lg="1fr" items="center" gap="md" className="section rtl--support">
      <div className="rtl--support--content">
        <div className="l_flow__lg">
          <div className="l_flow__xs">
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

          <Grid grid="1fr 1fr" md="1fr" gap="sm" className="feature-list">
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
          className="direction-item--small"
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
      </div>

      <div className="l_flow__sm">
        <Article type="ar" />
        <Article />
      </div>
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
