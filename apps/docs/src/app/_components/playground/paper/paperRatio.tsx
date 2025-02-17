import { Paper } from '@pillar-ui/core'

export function PaperRatio() {
  return (
    <div className="Sf-4">
      <Paper background="B1" width="96px" ratio="1" border>
        Hello
      </Paper>
      <Paper background="B1" width="96px" ratio="16-9" border>
        Hello
      </Paper>
      <Paper background="B1" width="96px" ratio="18-5" border>
        Hello
      </Paper>
      <Paper background="B1" width="96px" ratio="3-4" border>
        Hello
      </Paper>
      <Paper background="B1" width="96px" ratio="4-3" border>
        Hello
      </Paper>
      <Paper background="B1" width="96px" ratio="golden" border>
        Hello
      </Paper>
    </div>
  )
}
