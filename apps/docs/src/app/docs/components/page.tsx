import React from 'react'
import { Paper, Grid, Text } from '@pillar-ui/core'
import Link from 'next/link'
import { getComponents } from '~/api/docs'

async function Page() {
  const components = getComponents()

  return (
    <Paper as={Grid} m="5" grid="repeat(4, 1fr)" gap="4">
      {components.map((component) => (
        <Link href={`components/${component.slug}`} key={component.slug}>
          <Paper height="96px" corner="2" background="b-3" className="u_center">
            <Text size="6" weight="medium" color="b">
              {component.title}
            </Text>
          </Paper>
        </Link>
      ))}
    </Paper>
  )
}

export default Page
