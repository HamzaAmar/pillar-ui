import { Paper } from '@pillar-ui/core'

export const PaperPadding = () => {
  return (
    <>
      <Paper width="fit" background="b-5" size="8">
        2xl Padding
      </Paper>
      <Paper width="fit" background="b-5" size="7">
        xl Padding
      </Paper>
      <Paper width="fit" background="b-5" size="6">
        lg Padding
      </Paper>

      <Paper width="fit" background="b-5" size="5">
        md Padding
      </Paper>
      <Paper width="fit" background="b-5" size="4">
        sm Padding
      </Paper>

      <Paper width="fit" background="b-5" p="3">
        3 Padding
      </Paper>

      <Paper width="fit" background="b-5" p="2">
        2 Padding
      </Paper>
    </>
  )
}
