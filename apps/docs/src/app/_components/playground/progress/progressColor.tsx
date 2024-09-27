import { Flex, ProgressBar, ProgressBarStack, ProgressBarStackItem, ProgressCircle } from '@pillar-ui/core'

export const ProgressColor = () => {
  return (
    <>
      <div className="Sf3">
        <ProgressBar color="d" value={90} label="hello" />
        <ProgressBar color="su" value={90} label="hello" />
        <ProgressBar color="w" value={90} label="hello" />
        <ProgressBar color="se" value={90} label="hello" />
        <ProgressBar color="b" value={90} label="hello" />
        <ProgressBar color="p" value={90} label="hello" />
      </div>

      <Flex gap="4" wrap>
        <ProgressCircle color="d" value={90} label="hello" />
        <ProgressCircle color="su" value={90} label="hello" />
        <ProgressCircle color="w" value={90} label="hello" />
        <ProgressCircle color="se" value={90} label="hello" />
        <ProgressCircle color="b" value={90} label="hello" />
        <ProgressCircle color="p" value={90} label="hello" />
      </Flex>

      <ProgressBarStack label="Nice to meet you">
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
    </>
  )
}
