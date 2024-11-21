import { Grid, Paper } from '@pillar-ui/core'

const boxes = Array.from({ length: 5 }, (_, index) => (
  <Paper width="48p" ratio="1" background="W10" corner="2" className="F-c">
    {index + 1}
  </Paper>
))

const shared = {
  className: 'ex-striped',
  as: Paper,
  height: '96p',
  gap: '4',
  cols: { default: 'repeat(5,50px)' },
} as const

export const GridAlignItems = () => {
  return (
    <>
      <Grid {...shared}>{boxes}</Grid>
      <Grid {...shared} items="center">
        {boxes}
      </Grid>
      <Grid {...shared} items="end">
        {boxes}
      </Grid>
    </>
  )
}
