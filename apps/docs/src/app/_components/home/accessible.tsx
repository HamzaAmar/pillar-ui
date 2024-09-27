import { Grid, Flex, Heading, Text, Paper } from '@pillar-ui/core'
import { ACCESSIBILITY } from './data'
import { SectionHeading } from '~/component/core/sectionHeading'

export function Accessible() {
  return (
    <Flex direction="column" justify="center" className="section" gap="8">
      <SectionHeading
        subheading="Pillar UI The Intuitive React UI Library"
        heading="For Building Accessible Applications Effortlessly"
      />
      <Grid gap="5" grid="1fr 1fr 1fr" lg="1fr 1fr" sm="1fr">
        {ACCESSIBILITY.map(({ id, title, description, icon }) => (
          <Paper className="article--item" key={id} flow="2">
            <Flex gap="4" items="center">
              <div className="article--icon-container u_center">{icon}</div>
              <Heading as="h3" gap="6">
                {title}
              </Heading>
            </Flex>
            <Text color="b" low>
              {description}!
            </Text>
          </Paper>
        ))}
      </Grid>
    </Flex>
  )
}
