import { Grid, Paper } from '@pillar-ui/core'

const shared = {
  className: 'ex-striped F-c R-2',
  as: Paper,
  p: '5',
} as const

export const GridResponsiveTwo = () => {
  return (
    <Grid
      gap="3"
      cols={{
        default: '1fr',
        sm: '1fr 1fr',
        md: 'repeat(4, 1fr)',
        lg: 'repeat(6, 1fr)',
        xl: 'repeat(12, 1fr)',
      }}
    >
      {Array.from({ length: 64 }, (_, index) => (
        <Paper {...shared} key={index}>
          {index + 1}
        </Paper>
      ))}
    </Grid>
  )
}
