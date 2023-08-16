import React from 'react'
import { allHooks } from 'contentlayer/generated'
import type { Hooks } from 'contentlayer/generated'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { Layout } from '../../../component/common'

export async function getStaticProps() {
  return { props: { hooks: allHooks } }
}

export default function Hooks({ hooks }: { hooks: Hooks[] }) {
  return (
    <Layout>
      <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
        {hooks.map((hook) => (
          <Link href={`utils/${hook.slug}`} key={hook.slug}>
            <Paper height="5rem" corner="sm" background="surface-3" padding="xl" className="u_center">
              <Text size="lg" weight="medium" color="surface">
                {hook.title}
              </Text>
            </Paper>
          </Link>
        ))}
      </Paper>
    </Layout>
  )
}
