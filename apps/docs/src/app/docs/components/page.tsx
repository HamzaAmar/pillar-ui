import React from 'react'
import { Paper, Grid, Text } from '~/component/core/pillar'
import Link from 'next/link'
import { getComponents } from '~/api/docs'

async function Page() {
  const components = getComponents()

  return (
    <Paper as={Grid} m="md" grid="repeat(4, 1fr)" gap="sm">
      {components.map((component) => (
        <Link href={`components/${component.slug}`} key={component.slug}>
          <Paper height="96px" corner="sm" background="bg-3" p="xl" className="u_center">
            <Text size="lg" weight="medium" color="bg">
              {component.title}
            </Text>
          </Paper>
        </Link>
      ))}
    </Paper>
  )
}

export default Page
