import { Code, Flex, Paper, Text } from '@pillar-ui/core'
import React from 'react'

interface Prop {
  type: string
  defaultValue: string
}

export const Prop = ({ type, defaultValue = '-' }: Prop) => {
  return (
    <Flex gap="8" justify="between" as={Paper} border p="4">
      <div className="Sf-4">
        <Text color="b" size="3" low>
          Default
        </Text>
        <Code transform="lowercase" as="div">
          {defaultValue}
        </Code>
      </div>
      <div className="fl-1 Sf-4">
        <Text color="b" size="3" low>
          Type
        </Text>
        <Code transform="lowercase" as="div">
          {type}
        </Code>
      </div>
    </Flex>
  )
}
