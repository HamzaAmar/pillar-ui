import { Grid, Paper } from '@pillar-ui/core'

const boxes = Array.from({ length: 3 }, (_, index) => (
  <Paper background="W11" corner="2" className="F-c">
    {index + 1}
  </Paper>
))

const shared = {
  className: 'ex-striped',
  cols: { default: '1fr 1fr 1fr' },
  gap: '4',
  as: Paper,
} as const

export const GridJustifyItems = () => {
  return (
    <Paper flow="9">
      <Grid {...shared}>{boxes}</Grid>
      <Grid {...shared} justifyItem="start">
        {boxes}
      </Grid>
      <Grid {...shared} justifyItem="center">
        {boxes}
      </Grid>
      <Grid {...shared} justifyItem="end">
        {boxes}
      </Grid>
    </Paper>
  )
}
