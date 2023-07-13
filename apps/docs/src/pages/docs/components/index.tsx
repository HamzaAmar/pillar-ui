import React from 'react'
import { allComponents } from 'contentlayer/generated'
import type { Components } from 'contentlayer/generated'
import { Paper, Grid, Text } from '@pillar/core'
import { DocsLayout } from '../../../component/common'

export async function getStaticProps() {
  return { props: { components: allComponents } }
}

export default function Blog({ components }: { components: Components[] }) {
  // components.forEach((com) => console.log(com.slug, com.title))
  return (
    <DocsLayout>
      <Grid grid="repeat(4, 1fr)" gap="sm">
        {components.map((post) => (
          <Paper corner="sm" background="surface-3" padding="xl" key={post.slug} className="u_center">
            <Text>{post.title}</Text>
          </Paper>
        ))}
      </Grid>
    </DocsLayout>
  )
}
