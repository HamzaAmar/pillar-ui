import { Grid, Flex, Heading, Text, Paper } from '~/component/core/pillar'
import { ACCESSIBILITY } from './data'

export function Accessible() {
  return (
    <Flex direction="column" justify="center" className="section" gap="2xl">
      <div>
        <Text color="pri" contrast="low" size="lg">
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
              <Text color="bg" contrast="low">
                {description}!
              </Text>
            </div>
          </Paper>
        ))}
      </Grid>
    </Flex>
  )
}
