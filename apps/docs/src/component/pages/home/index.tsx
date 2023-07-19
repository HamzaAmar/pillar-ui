import { Button, Heading, Text, Flex, Paper, Grid } from '@pillar-ui/core'
import { Github, Booking } from '@pillar-ui/icons'

function AccessibleSection() {
  return (
    <Paper p="lg" className="l_flow__md">
      <Heading>Fully Accessible</Heading>
      <Grid className="md_grid-two sm_grid-one" gap="md" grid="1fr 1fr 1fr">
        <Paper background="surface-3" shadow="xs" corner="sm" p="sm">
          <Heading>Hello World</Heading>
          <Text color="surface" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore, dolorum placeat culpa sint,
            obcaecati, fuga natus atque doloribus minima minus sunt incidunt aliquid. Alias nihil facere natus aperiam
            quos!
          </Text>
        </Paper>
        <Paper background="surface-3" shadow="xs" corner="sm" p="sm">
          <Heading>Hello World</Heading>
          <Text color="surface" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore, dolorum placeat culpa sint,
            obcaecati, fuga natus atque doloribus minima minus sunt incidunt aliquid. Alias nihil facere natus aperiam
            quos!
          </Text>
        </Paper>
        <Paper background="surface-3" shadow="xs" corner="sm" p="sm">
          <Heading>Hello World</Heading>
          <Text color="surface" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore, dolorum placeat culpa sint,
            obcaecati, fuga natus atque doloribus minima minus sunt incidunt aliquid. Alias nihil facere natus aperiam
            quos!
          </Text>
        </Paper>
        <Paper background="surface-3" shadow="xs" corner="sm" p="sm">
          <Heading>Hello World</Heading>
          <Text color="surface" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore, dolorum placeat culpa sint,
            obcaecati, fuga natus atque doloribus minima minus sunt incidunt aliquid. Alias nihil facere natus aperiam
            quos!
          </Text>
        </Paper>
        <Paper background="surface-3" shadow="xs" corner="sm" p="sm">
          <Heading>Hello World</Heading>
          <Text color="surface" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore, dolorum placeat culpa sint,
            obcaecati, fuga natus atque doloribus minima minus sunt incidunt aliquid. Alias nihil facere natus aperiam
            quos!
          </Text>
        </Paper>
        <Paper background="surface-3" shadow="xs" corner="sm" p="sm">
          <Heading>Hello World</Heading>
          <Text color="surface" contrast="low">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tempore, dolorum placeat culpa sint,
            obcaecati, fuga natus atque doloribus minima minus sunt incidunt aliquid. Alias nihil facere natus aperiam
            quos!
          </Text>
        </Paper>
      </Grid>
    </Paper>
  )
}

export default function Docs() {
  return (
    <div className="l_flow__md">
      <Flex gap="xl" as="section" direction="column" justify="center" className="hero">
        <h1 className="hero--heading">Pillar is a fully Accessible UI Toolkit with Hooks and Icons</h1>
        <p className="hero--text">
          a comprehensive set of reusable UI components, React hooks, icons, and other tools for building React
          applications quickly and easily.
        </p>

        <Text color="surface" contrast="low">
          Currently, this library only supports React, but we are actively working on adding support for (Qwik, and Vue)
        </Text>
        <Flex gap="sm">
          <Button icon={<Booking />}>Get Started</Button>
          <Button icon={<Github strokeWidth={2} />} variant="soft" color="surface">
            Github
          </Button>
        </Flex>
      </Flex>
      <AccessibleSection />
      <AccessibleSection />
      <AccessibleSection />
      <AccessibleSection />
      <AccessibleSection />
    </div>
  )
}
