import { Flex, Grid, Heading, Paper, Text, Button, Chips } from '~/component/core/pillar'
import { Github } from '@pillar-ui/icons'
import React from 'react'
import { DocHeaderProps } from './docHeader.type'

export const DocHeader = ({ title, type, items, shared, excerpt, slug, file }: DocHeaderProps) => {
  const directory = file[0].toLowerCase() + file.slice(1)

  return (
    <Paper flow="lg" p="sm">
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
              {items?.map((item) => <Chips key={item}>{item}</Chips>)}
            </Flex>
          </>
        )}
        <Text weight="medium" size="sm" color="surface" contrast="low">
          Type
        </Text>
        <Flex gap="sm">
          <Chips>{type}</Chips>
        </Flex>
        {file ? (
          <>
            <Text weight="medium" size="sm" color="surface" contrast="low">
              import
            </Text>
            <Flex gap="sm">
              <code>
                import <b>{`{ ${title} }`}</b> from {`'@pillar-ui/${file}'`}
              </code>
            </Flex>
          </>
        ) : null}
      </Grid>

      <Flex gap="sm" wrap>
        <Button
          as="a"
          href={`https://github.com/HamzaAmar/pillar-ui/blob/main/packages/${shared}/${directory}/${file}.tsx`}
          target="_blank"
          color="surface"
          icon={<Github strokeWidth={2} />}
          size="xs"
        >
          Go To {slug} Source Code {file}
        </Button>
        <Button
          as="a"
          href="https://github.com/HamzaAmar/pillar-ui/issues"
          target="_blank"
          variant="soft"
          color="surface"
          icon={<Github strokeWidth={2} />}
          size="xs"
        >
          Issues
        </Button>
        <Button
          as="a"
          href="https://github.com/HamzaAmar/pillar-ui/discussions"
          target="_blank"
          variant="soft"
          color="surface"
          icon={<Github strokeWidth={2} />}
          size="xs"
        >
          discussions
        </Button>
      </Flex>
    </Paper>
  )
}
