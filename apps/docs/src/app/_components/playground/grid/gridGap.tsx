import { Grid, Paper } from '@pillar-ui/core'

const boxes = Array.from({ length: 10 }, (_, index) => (
  <Paper p="4" height="48p" background="W8" corner="2" className="F-c">
    {index + 1}
  </Paper>
))

const shared = {
  className: 'ex-striped',
  cols: { default: 'repeat(10, 1fr)' },
} as const

export const GridGap = () => {
  return (
    <>
      <Grid {...shared}>{boxes}</Grid>
      <Grid {...shared} gap="1">
        {boxes}
      </Grid>
      <Grid {...shared} gap="2">
        {boxes}
      </Grid>
      <Grid {...shared} gap="3">
        {boxes}
      </Grid>
      <Grid {...shared} gap="4">
        {boxes}
      </Grid>
      <Grid {...shared} gap="5">
        {boxes}
      </Grid>
      <Grid {...shared} gap="6">
        {boxes}
      </Grid>
      <Grid {...shared} gap="7">
        {boxes}
      </Grid>
      <Grid {...shared} gap="8">
        {boxes}
      </Grid>
      <Grid {...shared} gap="9">
        {boxes}
      </Grid>
    </>
  )
}
