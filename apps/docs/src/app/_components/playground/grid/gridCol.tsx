import { Grid, GridItem, Paper } from '@pillar-ui/core'

const shared = {
  className: 'ex-striped',
  as: Paper,
  height: '96p',
  gap: '4',
  p: '5',
  corner: '2',
} as const

export const GridCol = () => {
  return (
    <>
      <Grid gap="3" cols={{ default: 'repeat(5, 1fr)' }}>
        <GridItem col={{ default: '1/2' }} {...shared}>
          Hello
        </GridItem>
        <GridItem col={{ default: '2/6' }} {...shared}>
          Hello
        </GridItem>
      </Grid>
      <Grid gap="3" cols={{ default: 'repeat(12, 1fr)' }}>
        <GridItem col={{ default: 'span 3' }} {...shared}>
          Hello
        </GridItem>
        <GridItem col={{ default: 'span 6' }} {...shared}>
          Hello
        </GridItem>
        <GridItem col={{ default: 'span 3' }} {...shared}>
          Hello
        </GridItem>
      </Grid>
    </>
  )
}
