import React from 'react'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { getComponents } from '~/api/docs'
import { Metadata } from 'next'

async function Page() {
  const components = getComponents()

  return (
    <Paper as={Grid} m="5" cols={{ default: '1fr 1fr', lg: 'repeat(4, 1fr)' }} gap="4">
      {components.map((component) => (
        <Link href={`components/${component.slug}`} key={component.slug}>
          <Paper height="96px" corner="2" border className="F-c">
            <Text size="6" weight="5" color="b">
              {component.title}
            </Text>
          </Paper>
        </Link>
      ))}
    </Paper>
  )
}

export const metadata: Metadata = {
  title: 'Components List',
  description:
    'Explore the complete list of components in Pillar UI Our lightweight, accessible components empower you to create beautiful, responsive web applications.',
}
export default Page
