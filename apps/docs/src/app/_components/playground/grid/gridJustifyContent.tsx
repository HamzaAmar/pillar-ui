import { Grid, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48p" ratio="1" background="B6" corner="2" className="F-c" {...props} />
}

const boxes = Array.from({ length: 10 }, (_, index) => <Box key={index} />)

export const GridJustify = () => {
  return (
    <>
      <Grid cols={{ default: 'repeat(5,1fr)' }} gap="4">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(5,1fr)' }} gap="4" justify="center">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(5,1fr)' }} gap="4" justify="end">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(5,1fr)' }} gap="4" justify="between">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(5,1fr)' }} gap="4" justify="around">
        {boxes}
      </Grid>
      <Grid cols={{ default: 'repeat(5,1fr)' }} gap="4" justify="evenly">
        {boxes}
      </Grid>
    </>
  )
}
