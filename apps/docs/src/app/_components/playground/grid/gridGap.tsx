import { Grid, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48p" ratio="1" background="B6" corner="2" className="F-c" {...props} />
}

const boxes = Array.from({ length: 10 }, (_, index) => <Box key={index} />)

export const FlexGap = () => {
  return (
    <Paper flow="6">
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }}>{boxes}</Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="1">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="2">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="3">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="4">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="5">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="6">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="7">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="8">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(auto-fit,auto)' }} gap="9">
        {boxes}
      </Grid>
    </Paper>
  )
}
