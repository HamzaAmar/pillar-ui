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
import { Github, Booking, Discord, Linkdin, Youtube, Dollar } from '@pillar-ui/icons'
import { ACCESSIBILITY, COMING_SUPPORT, SIMPLE_DEVELOPMENT, SUPPORTED } from './home.data'
import Link from 'next/link'
import React, { CSSProperties, useState } from 'react'
import Image from 'next/image'

function AccessibleSection() {
  return (
    <Paper corner="lg" p="lg" flow="xl">
      <Heading className="highlight" as="h2" size="3xl" transform="capitalize">
        Fully Accessible
      </Heading>
      <Grid gap="xl" grid="1fr 1fr" md="1fr">
        {ACCESSIBILITY.map(({ id, title, description, icon }) => (
          <Paper key={id} flow="sm">
            {icon}
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
    <Paper corner="lg" p="lg" flow="lg">
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
          We believe in providing a seamless customization experience for our users. To change the theme of your
          project, simply click on the `Change Theme` button located at the top of the page. This button is designed to
          provide you with quick access to a variety of themes, allowing you to choose the one that best suits your
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
    </Paper>
  )
}

function SimplifyDevelopment() {
  return (
    <Paper corner="lg" p="lg" flow="lg">
      <Heading className="highlight" as="h2" size="3xl" transform="capitalize">
        Simplify Development
      </Heading>
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
  const [state, setState] = useState<'default' | 'light' | 'dark'>('default')

  return (
    <Grid grid="1fr 1fr" className="md_grid-one">
      <Paper corner="lg" p="lg" flow="lg">
        <Heading className="highlight" size="2xl" transform="capitalize" as="h2">
          Support Dark Mode
        </Heading>
        <Text color="surface" contrast="low" size="lg">
          We understand the importance of dark mode for a comfortable and accessible user experience, which is why our
          library fully supports it. Our customizable components are designed to seamlessly adapt to a dark color
          scheme, creating a cohesive look and feel for your application. Plus, we&#39;ve made it even easier to
          implement with our custom hook, useDarkMode from @pillar-ui/hooks, which provides all the functionality you
          need. The best part? It works seamlessly with server-side rendering (SSR) frameworks such as Next.js and
          Remix, so you don&#39;t have to worry about compatibility issues. Simply import useDarkMode and start creating
          a dark mode experience for your users. We&#39;ve even included a script that you can easily inject into your
          head to fix any flickering issues.
        </Text>
      </Paper>
      <Flex direction="column" gap="md">
        <Flex gap="sm" wrap>
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
            fill
          />
          <Image
            data-mode={state}
            src="/darkHero.png"
            className="switch--home-mode--image switch--home-mode--image__dark"
            alt="shelo"
            fill
          />
        </div>
      </Flex>
    </Grid>
  )
}

function DeveloperExperience() {
  return (
    <Grid grid="1fr 1fr" md="1fr" justify="start">
      <Paper p="lg" flow="sm">
        <Heading className="highlight" size="3xl" transform="capitalize" as="h2">
          Developer Experience
        </Heading>
        <Text color="surface" contrast="low" size="lg">
          Pillar UI enhances developer experience (DX) by providing efficient workflows for implementing and customizing
          components. It offers intuitive responsive variables to customize component appearance and prevent repetitive
          styling code.
        </Text>
        <Heading size="xl" transform="capitalize" as="h2">
          Responsive Variables
        </Heading>
        <Text color="surface" contrast="low" size="lg">
          Each component includes responsive variables for easy control over appearance. Override global defaults, such
          as the corner radius of buttons, for a consistent look.
        </Text>
        <Text color="surface" contrast="low" size="lg">
          Pillar UI eliminates repetitive styling by providing predefined styles and variables. Apply consistent design
          elements across the application without duplication, saving time and effort.{' '}
        </Text>
        <Heading size="xl" transform="capitalize" as="h2">
          Preventing Repetition
        </Heading>
        <Text color="surface" contrast="low" size="lg">
          With Pillar UI&apos;s design system, you can eliminate the need for repetitive styling code. By utilizing the
          provided variables and predefined styles, developers can easily apply consistent design elements across their
          application without duplicating effort.
        </Text>
        <Heading size="xl" transform="capitalize" as="h2">
          Customization and Extensibility
        </Heading>
        <Text color="surface" contrast="low" size="lg">
          Customize and extend Pillar UI to align with project requirements. Override default styles, extend components,
          and create new variations to adapt to design languages and branding guidelines.
        </Text>
        <Text color="surface" contrast="low" size="lg">
          Pillar UI&apos;s DX-focused approach empowers developers to efficiently create visually appealing and
          consistent interfaces, resulting in a productive development experience.
        </Text>
      </Paper>
      <Paper p="sm" flow="sm">
        <Text color="surface" contrast="low" size="md">
          Before updating the variables, the components utilize the default styles provided under the hood. These
          default styles serve as the starting point for the components appearance.
        </Text>
        <Flex items="center" as={Flex} wrap gap="sm">
          <Input fluid placeholder="Search You best movies" name="hello" />
          <Button>Hello world</Button>
          <Avatar image="https://picsum.photos/id/300/100/100" />
          <Chips>Hello world</Chips>
          <Badge variant="numeric" number={30} max={100} />
          <Switch label="Hello" />
          <Alert title="Hello world" message="nice to meet you here you can look at me like" />
        </Flex>
        <Text color="surface" contrast="low" size="md">
          However, if you wish to customize the appearance of a specific component, you can explore the variables
          associated with that component. Each component has its own set of variables that control different aspects of
          its appearance. By checking and modifying these variables, you have the flexibility to tailor the components
          visual style according to your specific requirements. This empowers you to have fine-grained control over the
          appearance of individual components while maintaining consistency throughout your application.
        </Text>
        <Flex
          style={
            { '--button-corner': '.25rem', '--badge-corner': '.25rem', '--avatar-corner': '.25rem' } as CSSProperties
          }
          items="center"
          as={Flex}
          wrap
          gap="sm"
        >
          <Input fluid placeholder="Search You best movies" name="hello" />
          <Button>Hello world</Button>
          <Avatar image="https://picsum.photos/id/300/100/100" />
          <Chips>Hello world</Chips>
          <Badge variant="numeric" number={30} max={100} />
          <Switch label="Hello" />
          <Alert title="Hello world" message="nice to meet you here you can look at me like" />
        </Flex>
        <Text color="surface" contrast="low" size="md">
          After updating the variables, you have two options to apply the changes. You can either update the variable
          globally, ensuring the same design is shared across the entire site. Alternatively, you can update the
          variables within a specific tree of elements, making changes only to the elements within that particular tree.
        </Text>
      </Paper>
    </Grid>
  )
}

function RTLSupport() {
  const [state, setState] = useState('ltr')
  return (
    <Paper p="lg" flow="lg">
      <Heading className="highlight" size="3xl" transform="capitalize" as="h2">
        Right to left support
      </Heading>
      <Text color="surface" contrast="low" size="lg">
        Accessibility for all users is important to us, which is why our UI library fully supports right-to-left (RTL)
        languages such as Arabic, Hebrew, and Farsi. This means that your website or application can provide a seamless
        experience for users who read and write in RTL languages, with proper text alignment, visual order, and
        navigation. Our RTL support is integrated into all of our components, allowing you to easily create interfaces
        that meet the needs of diverse audiences. We also have a custom hook called useDirection from @pillar-ui/hooks
        that can be used to handle the direction of the text and elements based on the language of the user. This hook
        is especially useful when dealing with dynamic content or when you want to provide additional control over the
        direction of elements. At our core, we are committed to providing a comprehensive solution that empowers you to
        create inclusive and user-friendly designs. Whether you are building a website or an application, oupbrary is
        designed to make your work easier, more efficient, and more accessible for everyone.
      </Text>
    </Paper>
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
      <DeveloperExperience />
    </div>
  )
}
