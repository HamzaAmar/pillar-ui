import { Grid, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper p="5" background="B6" corner="2" {...props} />
}

const items = Array.from({ length: 10 }, (_, index) => (
  <Box width="" key={index}>
    {index + 1}
  </Box>
))

export const GridCols = () => {
  return (
    <Paper flow="9">
      <Grid gap="3" rows={{ default: 'repeat(5, 1fr)' }}>
        {items}
      </Grid>
      <Grid gap="3" rows={{ default: '1fr 1fr', md: 'repeat(5, 1fr)', lg: 'repeat(10, 1fr)' }}>
        {items}
      </Grid>
    </Paper>
  )
}
