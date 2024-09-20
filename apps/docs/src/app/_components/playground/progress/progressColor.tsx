import { Flex, ProgressBar, ProgressBarStack, ProgressBarStackItem, ProgressCircle } from '@pillar-ui/core'

export const ProgressColor = () => {
  return (
    <>
      <div className="l_f-sm">
        <ProgressBar color="dan" value={90} label="hello" />
        <ProgressBar color="suc" value={90} label="hello" />
        <ProgressBar color="war" value={90} label="hello" />
        <ProgressBar color="sec" value={90} label="hello" />
        <ProgressBar color="bg" value={90} label="hello" />
        <ProgressBar color="pri" value={90} label="hello" />
      </div>

      <Flex gap="sm" wrap>
        <ProgressCircle color="dan" value={90} label="hello" />
        <ProgressCircle color="suc" value={90} label="hello" />
        <ProgressCircle color="war" value={90} label="hello" />
        <ProgressCircle color="sec" value={90} label="hello" />
        <ProgressCircle color="bg" value={90} label="hello" />
        <ProgressCircle color="pri" value={90} label="hello" />
      </Flex>

      <ProgressBarStack label="Nice to meet you">
        <ProgressBarStackItem label="CSS" color="dan" value={30}>
          <button>CSS 30</button>
        </ProgressBarStackItem>
        <ProgressBarStackItem label="HTML" color="suc" value={15}>
          <button>HTML 15%</button>
        </ProgressBarStackItem>
        <ProgressBarStackItem label="React" color="sec" value={25}>
          <button>React 25%</button>
        </ProgressBarStackItem>
        <ProgressBarStackItem label="Node" color="pri" value={15}>
          <button>Node 15%</button>
        </ProgressBarStackItem>
        <ProgressBarStackItem label="SCSS" color="war" value={15}>
          <button>SCSS 15%</button>
        </ProgressBarStackItem>
      </ProgressBarStack>
    </>
  )
}
