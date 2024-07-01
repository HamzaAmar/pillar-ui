import React from 'react'
import { Paper, Grid, Text } from '~/component/core/pillar'
import Link from 'next/link'
import { getComponents } from '~/api/docs'
import { Metadata } from 'next'

async function Page() {
  const components = getComponents()
  return (
    <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
      {components.map((component) => (
        <Link href={`components/${component.slug}`} key={component.slug}>
          <Paper height="5rem" corner="sm" background="surface-3" p="xl" className="u_center">
            <Text size="lg" weight="medium" color="surface">
              {component.title}
            </Text>
          </Paper>
        </Link>
      ))}
    </Paper>
  )
}

export default Page
