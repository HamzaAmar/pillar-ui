import { Flex, Text, Button, Grid, IconButton } from '@pillar-ui/core'
import { SUPPORTED } from './data'
import { Discord, Github, Twitter } from '@pillar-ui/icons'
import { SectionHeading } from '~/component/core/sectionHeading'
export function PillarSupport() {
  return (
    <Flex gap="7" justify="evenly" className="simplify-dev--container section">
      <div className="Sf-7">
        <div
          className="Sf
          md"
        >
          <SectionHeading subheading="Framework Harmony:" heading="Effortless Integration with Pillar UI" />

          <Text color="b" low size="7" className="dark--description">
            Pillar UI adapts to your workflow, enhancing your projects with ease. Stay ahead of the curve with support
            for emerging technologies.
          </Text>
        </div>
        <Grid
          style={{ position: 'sticky', top: '8rem' }}
          items="center"
          gap="7"
          cols={{ default: 'repeat(auto-fit, minmax(180px, 1fr))' }}
        >
          {SUPPORTED.map(({ slug, icon }) => (
            <div key={slug}>{icon}</div>
          ))}
        </Grid>
      </div>
      <div className="support--second Sf-4">
        <div className="get-started Sf-4">
          <Text weight="5" size="6">
            Lets Getting Start
          </Text>
          <Text size="4" color="b" low>
            Build faster and lighter. Experience the power of our streamlined design system.
          </Text>
          <Button>Get Started</Button>
        </div>
        <div className="get-started Sf-4">
          <Text weight="5" size="6">
            Community
          </Text>
          <Text size="4" color="b" low>
            Get involved in our community. Everyone is welcome!
          </Text>
          <Flex gap="4">
            <IconButton size="4" icon={<Twitter />} title="Connect With Twitter" />
            <IconButton size="4" icon={<Github />} title="Connect With Github" />
            <IconButton size="4" icon={<Discord />} title="Connect With Twitter" />
          </Flex>
        </div>
      </div>
    </Flex>
  )
}
