import { Flex, Grid, Heading, Paper, Text, Button, Chips } from '@pillar-ui/core'
import { Github } from '@pillar-ui/icons'
import React from 'react'
import { DocHeaderProps } from './docHeader.type'

const docHeader = ({ title, type, items, file, excerpt }: DocHeaderProps) => {
  return (
    <Paper pb="sm" flow="lg" borderStyle="solid" borderColor="opacity-6" borderPosition="bottom" padding="sm">
      <Heading size="2xl">
        {title} {type} Documantation
      </Heading>
      <Text color="surface" contrast="low" size="sm" weight="medium">
        {excerpt}
      </Text>

      <Grid grid="auto minmax(0, 1fr)" sm="1fr" gap="md">
        {type === 'Components' && (
          <>
            <Text weight="medium" size="sm" color="surface" contrast="low">
              Components:
            </Text>
            <Flex gap="sm" wrap>
              {items?.map((item) => (
                <Chips key={item}>{item}</Chips>
              ))}
            </Flex>
          </>
        )}
        <Text weight="medium" size="sm" color="surface" contrast="low">
          Type
        </Text>
        <Flex gap="sm">
          <Chips>{type}</Chips>
        </Flex>
        <Text weight="medium" size="sm" color="surface" contrast="low">
          import
        </Text>
        <Flex gap="sm">
          <code>
            import <b>{`{ ${title} }`}</b> from {`'@pillar-ui/${file}'`}
          </code>
        </Flex>
      </Grid>

      <Flex gap="sm" wrap>
        <Button color="surface" icon={<Github strokeWidth={2} />} size="xs">
          Source Code
        </Button>
        <Button variant="soft" color="surface" icon={<Github strokeWidth={2} />} size="xs">
          Issues
        </Button>
        <Button variant="soft" color="surface" icon={<Github strokeWidth={2} />} size="xs">
          discussions
        </Button>
      </Flex>
    </Paper>
  )
}

export default docHeader
