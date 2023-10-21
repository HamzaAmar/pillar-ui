import React from 'react'
import Link from 'next/link'
import { Layout } from 'src/component/common'
import { Button, Flex, Heading, Text } from '@pillar-ui/core'

export default function Custom404() {
  return (
    <Layout>
      <Flex style={{ maxWidth: '680px' }} justify="center" direction="column" items="center" gap="md" className="hero">
        <Heading size="3xl" weight="bold">
          404 - Page Not Found
        </Heading>
        <Text contrast="low" size="lg">
          The page you&apos;re looking for has wandered into the digital abyss. But worry not! The UI guardians are here
          to guide you back.
        </Text>
        <Button as={Link} href="/">
          Return to Home
        </Button>
      </Flex>
    </Layout>
  )
}
