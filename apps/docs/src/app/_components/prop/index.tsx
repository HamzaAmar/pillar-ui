import { Code, Flex, Paper, Text } from '@pillar-ui/core'
import React from 'react'

interface Prop {
  type: string
  defaultValue: string
}

export const Prop = ({ type, defaultValue = '-' }: Prop) => {
  return (
    <Flex gap="3" justify="between" as={Paper} border p="4">
      <div className="fl-1 Sf-4">
        <Text color="b" size="4" low>
          Default
        </Text>
        <Code transform="lowercase" as="div">
          {defaultValue}
        </Code>
      </div>
      <div className="fl-2 Sf-4">
        <Text color="b" size="4" low>
          Type
        </Text>
        <Code transform="lowercase" as="div">
          {type}
        </Code>
      </div>
    </Flex>
  )
}
