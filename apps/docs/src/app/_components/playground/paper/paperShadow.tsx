import { Paper } from '@pillar-ui/core'

export const PaperShadow = () => {
  return (
    <>
      <Paper size="4" background="b-5" shadow="3">
        Hello
      </Paper>
      <Paper size="4" background="b-5" shadow="sm">
        Hello
      </Paper>
      <Paper size="4" background="b-5" shadow="md">
        Hello
      </Paper>
      <Paper size="4" background="b-5" shadow="lg">
        Hello
      </Paper>
      <Paper size="4" background="b-5" shadow="xl">
        Hello
      </Paper>
    </>
  )
}
