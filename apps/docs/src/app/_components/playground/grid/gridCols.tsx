import { Grid, Paper } from '@pillar-ui/core'

const items = Array.from({ length: 10 }, (_, index) => (
  <Paper p="5" background="W6" corner="2">
    {index + 1}
  </Paper>
))

const shared = {
  className: 'ex-striped',
  gap: '4',
} as const

export const GridCols = () => {
  return (
    <>
      <Grid cols={{ default: 'repeat(5, 1fr)' }} {...shared}>
        {items}
      </Grid>
      <Grid cols={{ default: '1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)', xl: 'repeat(8, 1fr)' }} {...shared}>
        {items}
      </Grid>
    </>
  )
}
