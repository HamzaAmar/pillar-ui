import { Grid, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="W11" corner="2" className="F-c" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)

export const GridJustifyContent = () => {
  return (
    <>
      <Grid className="ex-striped" cols={{ default: 'repeat(5,50px)' }} gap="4">
        {boxes}
      </Grid>
      <Grid className="ex-striped" cols={{ default: 'repeat(5,50px)' }} gap="4" justify="center">
        {boxes}
      </Grid>
      <Grid className="ex-striped" cols={{ default: 'repeat(5,50px)' }} gap="4" justify="end">
        {boxes}
      </Grid>
      <Grid className="ex-striped" cols={{ default: 'repeat(5,50px)' }} gap="4" justify="between">
        {boxes}
      </Grid>
      <Grid className="ex-striped" cols={{ default: 'repeat(5,50px)' }} gap="4" justify="around">
        {boxes}
      </Grid>
      <Grid className="ex-striped" cols={{ default: 'repeat(5,50px)' }} gap="4" justify="evenly">
        {boxes}
      </Grid>
    </>
  )
}
