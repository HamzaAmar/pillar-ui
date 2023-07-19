import React from 'react'
import { allUtils } from 'contentlayer/generated'
import type { Hooks } from 'contentlayer/generated'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Layout } from '../../../component/common'

export async function getStaticProps() {
  return { props: { utils: allUtils } }
}

export default function Hooks({ utils }: { utils: Hooks[] }) {
  return (
    <Layout>
      <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
        {utils.map((post) => (
          <Link href={`utils/${post.slug}`} key={post.slug}>
            <Paper height="5rem" corner="sm" background="surface-3" padding="xl" className="u_center">
              <Text>{post.title}</Text>
            </Paper>
          </Link>
        ))}
      </Paper>
    </Layout>
  )
}
