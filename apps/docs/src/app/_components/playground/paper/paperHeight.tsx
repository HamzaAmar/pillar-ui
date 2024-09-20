import { Paper } from '@pillar-ui/core'

export const PaperHeight = () => {
  return (
    <>
      <Paper background="bg-5" width="30-char">
        This Paper component will be 30 characters wide This Paper component will be 30 characters wide This Paper
        component will be 30 characters wide.
      </Paper>
      <Paper background="bg-5" width="60-char">
        This Paper component will be 60 characters wide This Paper component will be 60 characters wide This Paper
        component will be 60 characters wide.
      </Paper>
      <Paper background="bg-5" width="90-char">
        This Paper component will be 90 characters wide This Paper component will be 90 characters wide This Paper
        component will be 90 characters wide.
      </Paper>
      <Paper background="bg-5" width="50">
        This Paper component will take up half of its parent container This Paper component will take up half of its
        parent container This Paper component will take up half of its parent container.
      </Paper>
    </>
  )
}
