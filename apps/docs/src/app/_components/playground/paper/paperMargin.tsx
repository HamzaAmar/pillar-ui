import { Paper } from '@pillar-ui/core'
export const PaperMargin = () => {
  return (
    <>
      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="b-5"
        m="2xl"
      >
        2xl Padding
      </Paper>
      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="xl">
        xl Padding
      </Paper>
      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="lg">
        lg Padding
      </Paper>

      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="md">
        md Padding
      </Paper>
      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="sm">
        sm Padding
      </Paper>

      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="xs">
        xs Padding
      </Paper>

      <Paper
        style={{ display: 'flow-root' }}
        className="u_center"
        width="30-char"
        ratio="16-9"
        background="b-5"
        m="2xs"
      >
        2xs Padding
      </Paper>
    </>
  )
}
