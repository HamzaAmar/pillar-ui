import React from 'react'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Metadata } from 'next'
import { getUtils } from '~/api/docs'

export default function utils() {
  const utils = getUtils()
  return (
    <Paper as={Grid} m="5" cols={{ default: 'repeat(4, 1fr)' }} gap="4">
      {utils.map((util) => (
        <Link href={`utils/${util.slug}`} key={util.slug}>
          <Paper height="96p" corner="2" background="B3" className="F-c">
            <Text size="6" weight="5" color="b">
              {util.title}
            </Text>
          </Paper>
        </Link>
      ))}
    </Paper>
  )
}

export const metadata: Metadata = {
  title: 'Utilities Library',
  description:
    'Browse through a wide array of utilities in the Pillar UI library, designed to make your development workflow more efficient and streamlined.',
}
