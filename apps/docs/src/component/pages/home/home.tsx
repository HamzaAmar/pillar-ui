import { Button, Heading, Text, Flex, Paper, Grid, IconButton } from '@pillar/core'
import { Github, Booking, Discord, Linkdin, Youtube } from '@pillar/icons'
import { ACCESSIBILITY, SIMPLE_DEVELOPMENT } from './home.data'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

function AccessibleSection() {
  return (
    <Paper corner="lg" padding="lg" className="l_flow__lg">
      <Heading as="h2" size="xl">
        Fully Accessible
      </Heading>
      <Grid className="md_grid-two sm_grid-one" gap="md" columns="1fr 1fr 1fr">
        {ACCESSIBILITY.map(({ id, title, description, icon }) => (
          <Paper key={id} background="surface-3" shadow="xs" corner="sm" padding="sm" className="l_flow__md">
            <Heading as="h3" size="lg">
              {title}
            </Heading>
            <Text color="surface" contrast="low">
              {description}!
            </Text>
          </Paper>
        ))}
      </Grid>
    </Paper>
  )
}

function HeroSection() {
  return (
    <Flex as="section" direction="column" justify="evenly" className="hero">
      <h1 className="hero--heading">
        Pillar Your Comprehensive, Accessible UI Toolkit with Hooks, Icons, and Utilities
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
        <Button as={Link} href="/docs/components/accordion" icon={<Booking />}>
          Get Started
        </Button>

        <Button color="surface" variant="outline" as={Link} href="/docs/components/accordion" icon={<Booking />}>
          Generate Theme
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
    <Paper corner="lg" padding="lg" className="l_flow__md">
      <Heading as="h2" size="xl">
        Customize You Theme
      </Heading>
      <Grid className="sm_grid-one" gap="md" columns="1fr 1fr">
        <div className="l_flow__sm">
          <Text color="surface" contrast="low" size="lg">
            We understand that everyone has different needs and preferences. That&#39;s why we offer a wide range of
            customization options for our project. You can change the colors, fonts, and layout to match your brand or
            style.
          </Text>
          <Text color="surface" contrast="low" size="lg">
            We believe in providing a seamless customization experience for our users. To change the theme of your
            project, simply click on the `Change Theme` button located at the top of the page. This button is designed
            to provide you with quick access to a variety of themes, allowing you to choose the one that best suits your
            preferences and brand.
          </Text>
          <Text color="surface" contrast="low" size="lg">
            Once you click on the &#34;Change Theme&#34; button, a pop-up or dropdown menu will appear, showcasing a
            selection of different themes to choose from. These themes are carefully crafted to offer a diverse range of
            color schemes, fonts, and layouts that can be easily applied to your project.
          </Text>

          <Text color="surface" contrast="low" size="lg">
            To select a new theme, you can browse through the available options and click on the one that catches your
            eye. The changes will be applied instantly, allowing you to see the new theme in action right away. If you
            decide that the new theme isn&#39;t quite what you were looking for, you can easily revert back to the
            previous theme or explore other options until you find the perfect fit.
          </Text>
        </div>
        <div>
          <Text color="surface" contrast="low" size="lg">
            We understand that everyone has different needs and preferences. That&#39;s why we offer a wide range of
            customization options for our project. You can change the colors, fonts, and layout to match your brand or
            style.
          </Text>
        </div>
      </Grid>
    </Paper>
  )
}

function SimplifyDevelopment() {
  return (
    <Paper corner="lg" padding="lg" className="l_flow__md">
      <Heading as="h2" size="xl">
        Simplify Development
      </Heading>
      <Grid className="md_grid-two sm_grid-one" gap="md" columns="1fr 1fr 1fr">
        {SIMPLE_DEVELOPMENT.map(({ title, id, description }) => (
          <Paper key={id} background="surface-3" shadow="xs" corner="sm" padding="sm" className="l_flow__md">
            <Heading as="h3" size="lg">
              {title}
            </Heading>
            <Text color="surface" contrast="low">
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
    <Paper corner="lg" padding="lg" className="l_flow__md">
      <Heading as="h2" size="xl">
        Seamless Integration with Leading Frameworks
      </Heading>
      <Text color="surface" contrast="low" size="lg">
        At Pillar UI, we believe in providing a seamless development experience by offering compatibility with a wide
        range of popular frameworks. Our UI library can be effortlessly integrated into your projects, whether
        you&#39;re using Vite, Create React App, Next.js, Remix, or Gatsby. In the future, we plan to add support for
        Vite, Qwik, and Svelte JS. Stay tuned!
      </Text>
      <Flex gap="md">
        <Paper padding="sm" corner="sm" background="surface-5">
          Hello
        </Paper>
        <Paper padding="sm" corner="sm" background="surface-5">
          Hello
        </Paper>
        <Paper padding="sm" corner="sm" background="surface-5">
          Hello
        </Paper>
        <Paper padding="sm" corner="sm" background="surface-5">
          Hello
        </Paper>
        <Paper padding="sm" corner="sm" background="surface-5">
          Hello
        </Paper>
      </Flex>
      {/* <Grid className="md_grid-two sm_grid-one" gap="md" columns="1fr 1fr 1fr">
        {SIMPLE_DEVELOPMENT.map(({ title, id, description }) => (
          <Paper key={id} background="surface-3" shadow="xs" corner="sm" padding="sm" className="l_flow__md">
            <Heading as="h3" size="lg">
              {title}
            </Heading>
            <Text color="surface" contrast="low">
              {description}
            </Text>
          </Paper>
        ))}
      </Grid> */}
    </Paper>
  )
}

function DarkMode() {
  const [state, setState] = useState<'default' | 'light' | 'dark'>('default')

  return (
    <Grid columns="1fr 1fr" className="md_grid-one">
      <Paper corner="lg" padding="lg" className="l_flow__md">
        <Heading size="xl" as="h2">
          Support Dark Mode
        </Heading>
        <Text color="surface" contrast="low" size="lg">
          We understand the importance of dark mode for a comfortable and accessible user experience, which is why our
          library fully supports it. Our customizable components are designed to seamlessly adapt to a dark color
          scheme, creating a cohesive look and feel for your application. Plus, we&#39;ve made it even easier to
          implement with our custom hook, useDarkMode from @pillar/hooks, which provides all the functionality you need.
          The best part? It works seamlessly with server-side rendering (SSR) frameworks such as Next.js and Remix, so
          you don&#39;t have to worry about compatibility issues. Simply import useDarkMode and start creating a dark
          mode experience for your users. We&#39;ve even included a script that you can easily inject into your head to
          fix any flickering issues.
        </Text>
      </Paper>
      <Flex direction="column" gap="md">
        <Flex gap="sm">
          <Button
            color={state === 'dark' ? 'primary' : 'surface'}
            variant={state === 'dark' ? 'solid' : 'outline'}
            onClick={() => setState('dark')}
            size="xs"
            data-mode={state}
          >
            Dark
          </Button>
          <Button
            color={state === 'light' ? 'primary' : 'surface'}
            variant={state === 'light' ? 'solid' : 'outline'}
            onClick={() => setState('light')}
            size="xs"
            data-mode={state}
          >
            Light
          </Button>
          <Button
            color={state === 'default' ? 'primary' : 'surface'}
            variant={state === 'default' ? 'solid' : 'outline'}
            onClick={() => setState('default')}
            size="xs"
            data-mode={state}
          >
            Mixed
          </Button>
        </Flex>
        <div className="switch--home-mode--container">
          <Image
            src="/lightHero.png"
            className="switch--home-mode--image switch--home-mode--image__light"
            alt="shelo"
          />
          <Image
            data-mode={state}
            src="/darkHero.png"
            className="switch--home-mode--image switch--home-mode--image__dark"
            alt="shelo"
          />
        </div>
      </Flex>
    </Grid>
  )
}

function RTLSupport() {
  const [state, setState] = useState('ltr')
  return (
    <Grid columns="1fr 1fr" className="md_grid-one">
      <Paper corner="lg" padding="lg" className="l_flow__md">
        <Heading size="xl" as="h2">
          Right to left support
        </Heading>
        <Text color="surface" contrast="low" size="lg">
          Accessibility for all users is important to us, which is why our UI library fully supports right-to-left (RTL)
          languages such as Arabic, Hebrew, and Farsi. This means that your website or application can provide a
          seamless experience for users who read and write in RTL languages, with proper text alignment, visual order,
          and navigation. Our RTL support is integrated into all of our components, allowing you to easily create
          interfaces that meet the needs of diverse audiences. We also have a custom hook called useDirection from
          @pillar/hooks that can be used to handle the direction of the text and elements based on the language of the
          user. This hook is especially useful when dealing with dynamic content or when you want to provide additional
          control over the direction of elements. At our core, we are committed to providing a comprehensive solution
          that empowers you to create inclusive and user-friendly designs. Whether you are building a website or an
          application, our UI library is designed to make your work easier, more efficient, and more accessible for
          everyone.
        </Text>
      </Paper>
      <Flex direction="column" gap="md">
        <Flex gap="sm">
          <Button
            color={state === 'ltr' ? 'primary' : 'surface'}
            variant={state === 'ltr' ? 'solid' : 'outline'}
            onClick={() => setState('ltr')}
            size="xs"
            data-mode={state}
          >
            LTR
          </Button>
          <Button
            color={state === 'rtl' ? 'primary' : 'surface'}
            variant={state === 'rtl' ? 'solid' : 'outline'}
            onClick={() => setState('rtl')}
            size="xs"
            data-mode={state}
          >
            RTL
          </Button>
        </Flex>
        <div className="switch--home-mode--container">
          <Image src="/arabic.png" className="switch--home-mode--image switch--home-mode--image__light" alt="shelo" />
          <Image
            data-mode={state}
            src="/darkHero.png"
            className="switch--home-mode--image switch--home-mode--image__ltr "
            alt="hello"
          />
        </div>
      </Flex>
    </Grid>
  )
}

export default function HomePage() {
  return (
    <div className="l_flow__xl">
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
