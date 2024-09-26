import React from 'react'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { getComponents } from '~/api/docs'

async function Page() {
  const components = getComponents()

  return (
    <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="4">
      {components.map((component) => (
        <Link href={`components/${component.slug}`} key={component.slug}>
          <Paper height="96px" corner="sm" background="b-3" p="xl" className="u_center">
            <Text gap="6" weight="medium" color="b">
              {component.title}
            </Text>
          </Paper>
        </Link>
      ))}
    </Paper>
  )
}

export default Page
