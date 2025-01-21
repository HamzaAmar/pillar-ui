import { Grid, Paper } from '@pillar-ui/core'

const boxes = Array.from({ length: 10 }, (_, index) => (
  <Paper width="48px" ratio="1" background="W10" corner="2" className="F-c">
    {index + 1}
  </Paper>
))

const shared = {
  as: Paper,
  height: '190px',
  className: 'ex-striped',
  cols: { default: 'repeat(5,50px)' },
  gap: '4',
} as const

export const GridAlignContent = () => {
  return (
    <Paper flow="9">
      <Grid {...shared} alignContent="baseline">
        {boxes}
      </Grid>
      <Grid {...shared}>{boxes}</Grid>
      <Grid {...shared} alignContent="center">
        {boxes}
      </Grid>
      <Grid {...shared} alignContent="end">
        {boxes}
      </Grid>

      <Grid {...shared} alignContent="between">
        {boxes}
      </Grid>

      <Grid {...shared} alignContent="around">
        {boxes}
      </Grid>

      <Grid {...shared} alignContent="evenly">
        {boxes}
      </Grid>
    </Paper>
  )
}
