import React from 'react'
import { allTutorials } from 'contentlayer/generated'
import type { Tutorials } from 'contentlayer/generated'
import { Paper, Grid, Text } from '@pillar-ui/core'
import { Layout } from '../../../component/common'
import Link from 'next/link'

export async function getStaticProps() {
  return { props: { tutorials: allTutorials } }
}

export default function Blog({ tutorials }: { tutorials: Tutorials[] }) {
  // components.forEach((com) => console.log(com.slug, com.title))
  return (
    <Layout>
      <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
        {tutorials.map((tutorial) => (
          <Link href={`utils/${tutorial.slug}`} key={tutorial.slug}>
            <Paper height="5rem" corner="sm" background="surface-3" padding="xl" className="u_center">
              <Text size="lg" weight="medium" color="surface">
                {tutorial.title}
              </Text>
            </Paper>
          </Link>
        ))}
      </Paper>
    </Layout>
  )
}
