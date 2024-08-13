import { Flex, Heading, Text, Button, Grid, IconButton } from '~/component/core/pillar'
import { SUPPORTED } from './data'
import { Discord, Github, Twitter } from '@pillar-ui/icons'
import { SectionHeading } from '~/component/core/sectionHeading'
export function PillarSupport() {
  return (
    <Flex gap="xl" justify="evenly" className="simplify-dev--container section">
      <div className="l_f-2xl">
        <div
          className="l_f-
          md"
        >
          <SectionHeading subheading="Framework Harmony:" heading="Effortless Integration with Pillar UI" />

          <Text color="bg" low size="xl" className="dark--description">
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
      <div className="support--second l_f-sm">
        <div className="get-started l_f-sm">
          <Text weight="medium" size="lg">
            Lets Getting Start
          </Text>
          <Text size="sm" color="bg" low>
            Build faster and lighter. Experience the power of our streamlined design system.
          </Text>
          <Button>Get Started</Button>
        </div>
        <div className="get-started l_f-sm">
          <Text weight="medium" size="lg">
            Community
          </Text>
          <Text size="sm" color="bg" low>
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
