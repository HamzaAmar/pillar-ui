import { Button, Flex, Paper, Radio, Text } from '@pillar-ui/core'
import Link from 'next/link'

export const RadioChildren = () => {
  return (
    <Flex direction="col" gap="6">
      <Radio>Option 1</Radio>
      <Radio>
        <Text weight="6">Nice to Meet You</Text>
        <Text size="3" color="b" low>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Radio>
      <Radio>
        <Flex gap="2">
          <Text as="span" weight="6">
            Remember Me |
          </Text>
          <Text as={Link} href="#">
            Sign Up
          </Text>
        </Flex>
      </Radio>
    </Flex>
  )
}
