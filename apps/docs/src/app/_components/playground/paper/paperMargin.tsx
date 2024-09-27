import { Paper } from '@pillar-ui/core'
export const PaperMargin = () => {
  return (
    <>
      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="8">
        2xl Padding
      </Paper>
      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="7">
        xl Padding
      </Paper>
      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="6">
        lg Padding
      </Paper>

      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="5">
        md Padding
      </Paper>
      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="4">
        sm Padding
      </Paper>

      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="3">
        3 Padding
      </Paper>

      <Paper style={{ display: 'flow-root' }} className="u_center" width="30-char" ratio="16-9" background="b-5" m="2">
        2 Padding
      </Paper>
    </>
  )
}
