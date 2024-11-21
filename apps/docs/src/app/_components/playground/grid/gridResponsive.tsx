import { Grid, GridItem, Paper } from '@pillar-ui/core'

const shared = {
  className: 'ex-striped F-c R-4',
  as: Paper,
  p: '4',
} as const

export const GridResponsive = () => {
  return (
    <Grid
      gap="4"
      cols={{ default: '1fr', lg: 'repeat(12, 1fr)' }}
      rows={{ default: 'auto auto 1fr auto auto', lg: 'repeat(6,1fr)' }}
    >
      <GridItem {...shared} col={{ default: '1/2', lg: 'span 12' }}>
        Header
      </GridItem>
      <GridItem {...shared} col={{ default: '1/2', lg: 'span 2' }} row={{ default: 'span 1', lg: 'span 5' }}>
        Aside 1
      </GridItem>
      <GridItem {...shared} col={{ default: '1/2', lg: 'span 8' }} row={{ default: 'span 1', lg: 'span 5' }}>
        Main
      </GridItem>
      <GridItem {...shared} col={{ default: '1/2', lg: 'span 2' }} row={{ default: 'span 1', lg: 'span 5' }}>
        Table Of content
      </GridItem>
      <GridItem {...shared} col={{ default: '1/2', lg: 'span 12' }}>
        Footer
      </GridItem>
    </Grid>
  )
}
