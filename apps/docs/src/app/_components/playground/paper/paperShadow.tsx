import { Paper } from '@pillar-ui/core'

export const PaperShadow = () => {
  return (
    <>
      <Paper p="sm" background="b-5" shadow="xs">
        Hello
      </Paper>
      <Paper p="sm" background="b-5" shadow="sm">
        Hello
      </Paper>
      <Paper p="sm" background="b-5" shadow="md">
        Hello
      </Paper>
      <Paper p="sm" background="b-5" shadow="lg">
        Hello
      </Paper>
      <Paper p="sm" background="b-5" shadow="xl">
        Hello
      </Paper>
    </>
  )
}
