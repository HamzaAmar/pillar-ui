import { Flex, Text, Button, Grid, IconButton } from '@pillar-ui/core'
import { SUPPORTED } from './data'
import { Discord, Github, Twitter } from '@pillar-ui/icons'
import { SectionHeading } from '~/component/core/sectionHeading'
import Link from 'next/link'
import Socials from '../social'
export function PillarSupport() {
  return (
    <Grid
      gap="7"
      cols={{ default: '1fr', md: '1fr 1fr', lg: '1.5fr 1fr' }}
      justify="evenly"
      className="simplify-dev--container section"
    >
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
          justifyItem="center"
          gap="7"
          cols={{ default: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
        >
          {SUPPORTED.map(({ slug, icon }) => (
            <div key={slug}>{icon}</div>
          ))}
        </Grid>
      </div>
      <div className="support--second Sf-4">
        <div className="get-started Sf-4">
          <Text weight="5" size="6">
            Let's Get Started.
          </Text>
          <Text size="4" color="b" low>
            Build faster and lighter. Experience the power of our streamlined design system.
          </Text>
          <Button as={Link} href="/docs/getting-started/cra">
            Get Started
          </Button>
        </div>
        <div className="get-started Sf-4">
          <Text weight="5" size="6">
            Community
          </Text>
          <Text size="4" color="b" low>
            Get involved in our community. Everyone is welcome!
          </Text>
          <Socials />
        </div>
      </div>
    </Grid>
  )
}
