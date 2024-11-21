import { Grid, GridItem, Paper } from '@pillar-ui/core'

export const GridRow = () => {
  return (
    <>
      <Grid gap="3" rows={{ default: 'repeat(12, 1fr)' }}>
        <GridItem row={{ default: 'span 2' }} as={Paper} p="5" background="B6" corner="2">
          Hello
        </GridItem>
        <GridItem row={{ default: 'span 8' }} as={Paper} p="5" background="B6" corner="2">
          Hello
        </GridItem>
        <GridItem row={{ default: 'span 2' }} as={Paper} p="5" background="B6" corner="2">
          Hello
        </GridItem>
      </Grid>
    </>
  )
}
