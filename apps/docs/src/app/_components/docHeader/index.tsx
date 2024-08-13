import { Flex, Grid, Heading, Paper, Text, Button, Chips } from '~/component/core/pillar'
import { Github } from '@pillar-ui/icons'
import React from 'react'
import { DocHeaderProps } from './docHeader.type'

export const DocHeader = ({ title, type, items, root, excerpt, slug, directory }: DocHeaderProps) => {
  const typeName = type === 'core' ? 'Components' : type[0].toUpperCase() + type.slice(1)

  return (
    <Paper flow="lg" p="sm">
      <Heading size="2xl">{title} documentation</Heading>
      <Text color="bg" low size="sm" weight="medium">
        {excerpt}
      </Text>

      <Grid grid="auto minmax(0, 1fr)" sm="1fr" gap="md">
        {type === 'core' && (
          <>
            <Text weight="medium" size="sm" color="bg" low>
              Components:
            </Text>
            <Flex gap="sm" wrap>
              {items?.map((item) => <Chips key={item}>{item}</Chips>)}
            </Flex>
          </>
        )}
        <Text weight="medium" size="sm" color="bg" low>
          Type
        </Text>
        <Flex gap="sm">
          <Chips>{typeName}</Chips>
        </Flex>
        <>
          <Text weight="medium" size="sm" color="bg" low>
            import
          </Text>
          <Flex gap="sm">
            <code>
              import <b>{`{ ${title} }`}</b> from {`'@pillar-ui/${type}'`}
            </code>
          </Flex>
        </>
      </Grid>

      <Flex gap="sm" wrap>
        <Button
          as="a"
          href={`https://github.com/HamzaAmar/pillar-ui/b/main/packages/${root}/${directory}`}
          target="_blank"
          color="bg"
          icon={<Github strokeWidth={2} />}
          size="xs"
        >
          Go To {slug} Source Code
        </Button>
        <Button
          as="a"
          href="https://github.com/HamzaAmar/pillar-ui/issues"
          target="_blank"
          variant="soft"
          color="bg"
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
          color="bg"
          icon={<Github strokeWidth={2} />}
          size="xs"
        >
          discussions
        </Button>
      </Flex>
    </Paper>
  )
}
