import React from 'react'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTutorials } from '~/api/docs'

function Tutorials() {
  const tutorials = getTutorials()
  return (
    <Paper as={Grid} m="4" grid="repeat(4, 1fr)" gap="4">
      {tutorials.map((tutorial) => (
        <Link href={`utils/${tutorial.slug}`} key={tutorial.slug}>
          <Paper height="96p" corner="2" background="b-3" className="Fc">
            <Text size="6" weight="5" color="b">
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
