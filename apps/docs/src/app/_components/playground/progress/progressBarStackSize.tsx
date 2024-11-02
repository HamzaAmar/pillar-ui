import { ProgressBarStack, ProgressBarStackItem, Size } from '@pillar-ui/core'

function ProgressBarStackDemo({ size }: { size: Size }) {
  return (
    <ProgressBarStack size={size} label="Nice to meet you">
      <ProgressBarStackItem label="CSS" color="d" value={30}>
        <button>CSS 30</button>
      </ProgressBarStackItem>
      <ProgressBarStackItem label="HTML" color="su" value={15}>
        <button>HTML 15%</button>
      </ProgressBarStackItem>
      <ProgressBarStackItem label="React" color="se" value={25}>
        <button>React 25%</button>
      </ProgressBarStackItem>
      <ProgressBarStackItem label="Node" color="p" value={15}>
        <button>Node 15%</button>
      </ProgressBarStackItem>
      <ProgressBarStackItem label="SCSS" color="w" value={15}>
        <button>SCSS 15%</button>
      </ProgressBarStackItem>
    </ProgressBarStack>
  )
}

export function ProgressBarStackSize({ size }: { size: Size }) {
  return (
    <div>
      <ProgressBarStackDemo size="1" />
      <ProgressBarStackDemo size="2" />
      <ProgressBarStackDemo size="3" />
      <ProgressBarStackDemo size="4" />
      <ProgressBarStackDemo size="5" />
      <ProgressBarStackDemo size="6" />
      <ProgressBarStackDemo size="7" />
      <ProgressBarStackDemo size="8" />
      <ProgressBarStackDemo size="9" />
    </div>
  )
}
