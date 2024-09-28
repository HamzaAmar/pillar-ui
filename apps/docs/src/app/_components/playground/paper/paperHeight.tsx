import { Paper } from '@pillar-ui/core'

export const PaperHeight = () => {
  return (
    <>
      <Paper background="b-5" width="30c">
        This Paper component will be 30 characters wide This Paper component will be 30 characters wide This Paper
        component will be 30 characters wide.
      </Paper>
      <Paper background="b-5" width="60c">
        This Paper component will be 60 characters wide This Paper component will be 60 characters wide This Paper
        component will be 60 characters wide.
      </Paper>
      <Paper background="b-5" width="90c">
        This Paper component will be 90 characters wide This Paper component will be 90 characters wide This Paper
        component will be 90 characters wide.
      </Paper>
      <Paper background="b-5" width="50">
        This Paper component will take up half of its parent container This Paper component will take up half of its
        parent container This Paper component will take up half of its parent container.
      </Paper>
    </>
  )
}
