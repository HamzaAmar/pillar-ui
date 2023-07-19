import React from 'react'
import { allHooks } from 'contentlayer/generated'
import type { Hooks } from 'contentlayer/generated'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Layout } from '../../../component/common'

export async function getStaticProps() {
  return { props: { posts: allHooks } }
}

export default function Hooks({ posts }: { posts: Hooks[] }) {
  return (
    <Layout>
      <Grid grid="repeat(4, 1fr)" gap="sm">
        {posts.map((post) => (
          <Link href={`hooks/${post.slug}`} key={post.slug}>
            <Paper corner="sm" background="surface-3" padding="xl" className="u_center">
              <Text>{post.title}</Text>
            </Paper>
          </Link>
        ))}
      </Grid>
    </Layout>
  )
}
