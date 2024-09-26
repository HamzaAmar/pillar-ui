import { Flex, ProgressBar, ProgressBarStack, ProgressBarStackItem, ProgressCircle } from '@pillar-ui/core'

export const ProgressSize = () => {
  return (
    <>
      <div className="l_f-sm">
        <ProgressBar gap="2" value={90} label="hello" />
        <ProgressBar gap="3" value={90} label="hello" />
        <ProgressBar size="sm" value={90} label="hello" />
        <ProgressBar gap="5" value={90} label="hello" />
        <ProgressBar gap="6" value={90} label="hello" />
        <ProgressBar gap="7" value={90} label="hello" />
        <ProgressBar gap="8" value={90} label="hello" />
      </div>
      <Flex wrap gap="4">
        <ProgressCircle gap="2" value={15} label="hello" />
        <ProgressCircle gap="3" value={15} label="hello" />
        <ProgressCircle size="sm" value={30} label="hello" />
        <ProgressCircle gap="5" value={45} label="hello" />
        <ProgressCircle gap="6" value={60} label="hello" />
        <ProgressCircle gap="7" value={90} label="hello" />
        <ProgressCircle gap="8" value={95} label="hello" />
      </Flex>
      <ProgressBarStack size="sm" label="Nice to meet you">
        <ProgressBarStackItem label="CSS" color="d" value={30}>
          <button>CSS 30</button>
        </ProgressBarStackItem>
        <ProgressBarStackItem label="HTML" color="s" value={15}>
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
