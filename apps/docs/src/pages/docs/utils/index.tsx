import React from 'react'
import { allTutorials } from 'contentlayer/generated'
import type { Tutorials } from 'contentlayer/generated'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Layout } from '../../../component/common'

export async function getStaticProps() {
  return { props: { utils: allTutorials } }
}

export default function utils({ utils }: { utils: Tutorials[] }) {
  return (
    <Layout
      title="Utilities Library"
      description="Browse through a wide array of utilities in the Pillar UI library, designed to make your development workflow more efficient and streamlined."
    >
      <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
        {utils.map((util) => (
          <Link href={`utils/${util.slug}`} key={util.slug}>
            <Paper height="5rem" corner="sm" background="surface-3" p="xl" className="u_center">
              <Text size="lg" weight="medium" color="surface">
                {util.title}
              </Text>
            </Paper>
          </Link>
        ))}
      </Paper>
    </Layout>
  )
}
