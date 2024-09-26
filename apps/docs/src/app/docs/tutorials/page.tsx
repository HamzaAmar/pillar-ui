import React from 'react'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTutorials } from '~/api/docs'

function Tutorials() {
  const tutorials = getTutorials()
  return (
    <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="4">
      {tutorials.map((tutorial) => (
        <Link href={`utils/${tutorial.slug}`} key={tutorial.slug}>
          <Paper height="96px" corner="sm" background="b-3" p="xl" className="u_center">
            <Text gap="6" weight="medium" color="b">
              {tutorial.title}
            </Text>
          </Paper>
        </Link>
      ))}
    </Paper>
  )
}

export default Tutorials

export const metadata: Metadata = {
  title: 'Learn to Utilize Pillar UI Effectively',
  description:
    'Dive into extensive tutorials that guide you through the effective use of Pillar UI components, hooks, and utilities, enhancing your development workflow and project outcomes.',
}
