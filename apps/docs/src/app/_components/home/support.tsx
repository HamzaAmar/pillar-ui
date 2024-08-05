import { Flex, Heading, Text, Button, Grid, IconButton } from '~/component/core/pillar'
import { SUPPORTED } from './data'
import { Discord, Github, Twitter } from '@pillar-ui/icons'
export function PillarSupport() {
  return (
    <Flex gap="xl" justify="evenly" className="simplify-dev--container section">
      <div className="l_flow__2xl">
        <div
          className="l_flow__
          md"
        >
          <div className="l_flow__2xs">
            <Text color="pri" contrast="low" size="lg">
              Framework Harmony:
            </Text>
            <Heading className="highlight" transform="uppercase" as="h2" size="3xl">
              Effortless Integration with Pillar UI
            </Heading>
          </div>
          <Text color="bg" contrast="low" size="xl" className="dark--description">
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
          <Text size="sm" color="bg" contrast="low">
            Build faster and lighter. Experience the power of our streamlined design system.
          </Text>
          <Button>Get Started</Button>
        </div>
        <div className="get-started l_flow__sm">
          <Heading>Community</Heading>
          <Text size="sm" color="bg" contrast="low">
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
