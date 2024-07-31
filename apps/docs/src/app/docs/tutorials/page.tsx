import React from 'react'
import { Paper, Grid, Text } from '~/component/core/pillar'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTutorials } from '~/api/docs'

function Tutorials() {
  const tutorials = getTutorials()
  return (
    <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
      {tutorials.map((tutorial) => (
        <Link href={`utils/${tutorial.slug}`} key={tutorial.slug}>
          <Paper height="5rem" corner="sm" background="bg-3" p="xl" className="u_center">
            <Text size="lg" weight="medium" color="bg">
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
