import React from 'react'
import { allComponents } from 'contentlayer/generated'
import type { Components } from 'contentlayer/generated'
import { Paper, Grid, Text } from '@pillar-ui/core'
import { Layout } from '../../../component/common'
import Link from 'next/link'

export async function getStaticProps() {
  return { props: { components: allComponents } }
}

export default function Blog({ components }: { components: Components[] }) {
  // components.forEach((com) => console.log(com.slug, com.title))
  return (
    <Layout>
      <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
        {components.map((component) => (
          <Link href={`utils/${component.slug}`} key={component.slug}>
            <Paper height="5rem" corner="sm" background="surface-3" padding="xl" className="u_center">
              <Text size="lg" weight="medium" color="surface">
                {component.title}
              </Text>
            </Paper>
          </Link>
        ))}
      </Paper>
    </Layout>
  )
}
