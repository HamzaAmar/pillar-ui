import { Flex, Grid, Heading, Paper, Text, Button, Chips } from '@pillar-ui/core'
import { Github } from '@pillar-ui/icons'
import React from 'react'
import { DocHeaderProps } from './docHeader.type'

export const DocHeader = ({ title, type, items, root, excerpt, slug, directory }: DocHeaderProps) => {
  const typeName = type === 'core' ? 'Components' : type[0].toUpperCase() + type.slice(1)

  return (
    <Paper className="docs--header" flow="6" p="4">
      <Heading size="8">{title} </Heading>
      <Text color="b" low size="4" weight="5">
        {excerpt}
      </Text>

      <Grid grid="auto minmax(0, 1fr)" sm="1fr" gap="5">
        {type === 'core' && (
          <>
            <Text weight="5" size="4" color="b" low>
              Components:
            </Text>
            <Flex gap="4" wrap>
              {items?.map((item) => <Chips key={item}>{item}</Chips>)}
            </Flex>
          </>
        )}
        <Text weight="5" size="4" color="b" low>
          Type
        </Text>
        <Flex gap="4">
          <Chips>{typeName}</Chips>
        </Flex>
        <>
          <Text weight="5" size="4" color="b" low>
            import
          </Text>
          <Flex gap="4">
            <code>
              import <b>{`{ ${title} }`}</b> from {`'@pillar-ui/${type}'`}
            </code>
          </Flex>
        </>
      </Grid>

      <Flex gap="4" wrap>
        <Button
          as="a"
          size="3"
          color="b"
          target="_blank"
          href={`https://github.com/HamzaAmar/pillar-ui/blob/main/packages/${root}/${directory}`}
          icon={<Github strokeWidth={2} />}
        >
          Go To {slug} Source Code
        </Button>
        <Button
          as="a"
          href="https://github.com/HamzaAmar/pillar-ui/issues"
          target="_blank"
          variant="soft"
          color="b"
          icon={<Github strokeWidth={2} />}
          size="3"
        >
          Issues
        </Button>
        <Button
          as="a"
          href="https://github.com/HamzaAmar/pillar-ui/discussions"
          target="_blank"
          variant="soft"
          color="b"
          icon={<Github strokeWidth={2} />}
          size="3"
        >
          discussions
        </Button>
      </Flex>
    </Paper>
  )
}
