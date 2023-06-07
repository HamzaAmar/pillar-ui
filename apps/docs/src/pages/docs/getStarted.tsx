import React from 'react'
import { DocsLayout } from '../../component/common'
import { Heading, Text } from '@pillar/core'

const getStarted = () => {
  return (
    <DocsLayout>
      <Heading>DocsLayout</Heading>
      <Text>
        Welcome to the Pillar project! This monorepo houses a comprehensive collection of reusable UI components, React
        hooks, and other tools designed to enhance modern web development. With a focus on accessibility, scalability,
        and best practices, Pillar streamlines the development process and empowers you to build robust, high-quality
        web applications.
      </Text>
    </DocsLayout>
  )
}

export default getStarted
