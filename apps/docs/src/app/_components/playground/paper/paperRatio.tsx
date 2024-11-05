import { Paper } from '@pillar-ui/core'

export function PaperRatio() {
  return (
    <div className="Sf-4">
      <Paper width="96p" ratio="1" border>
        Hello
      </Paper>
      <Paper width="96p" ratio="16-9" border>
        Hello
      </Paper>
      <Paper width="96p" ratio="18-5" border>
        Hello
      </Paper>
      <Paper width="96p" ratio="3-4" border>
        Hello
      </Paper>
      <Paper width="96p" ratio="4-3" border>
        Hello
      </Paper>{' '}
      <Paper width="96p" ratio="golden" border>
        Hello
      </Paper>
    </div>
  )
}
