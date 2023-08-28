import React from 'react'
import { allUtils } from 'contentlayer/generated'
import type { Utils } from 'contentlayer/generated'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Layout } from '../../../component/common'

export async function getStaticProps() {
  return { props: { utils: allUtils } }
}

export default function utils({ utils }: { utils: Utils[] }) {
  return (
    <Layout>
      <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
        {utils.map((util) => (
          <Link href={`utils/${util.slug}`} key={util.slug}>
            <Paper height="5rem" corner="sm" background="surface-3" padding="xl" className="u_center">
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
