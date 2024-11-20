import React from 'react'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Metadata } from 'next'
import { getHooks } from '~/api/docs'

export default function Hooks() {
  const hooks = getHooks()
  return (
    <Paper as={Grid} m="5" cols={{ default: 'repeat(4, 1fr)' }} gap="4">
      {hooks.map((hook) => (
        <Link href={`utils/${hook.slug}`} key={hook.slug}>
          <Paper height="96p" corner="2" background="B3" className="F-c">
            <Text size="6" weight="5" color="b">
              {hook.title}
            </Text>
          </Paper>
        </Link>
      ))}
    </Paper>
  )
}

export const metadata: Metadata = {
  title: 'Hooks Library',
  description:
    'Explore a robust collection of hooks in the Pillar UI library, each designed to simplify and optimize your development process.',
}
