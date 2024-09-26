import { Flex, ProgressBar, ProgressBarStack, ProgressBarStackItem, ProgressCircle } from '@pillar-ui/core'

export const ProgressSize = () => {
  return (
    <>
      <div className="l_f-sm">
        <ProgressBar size="2xs" value={90} label="hello" />
        <ProgressBar size="xs" value={90} label="hello" />
        <ProgressBar size="sm" value={90} label="hello" />
        <ProgressBar size="md" value={90} label="hello" />
        <ProgressBar size="lg" value={90} label="hello" />
        <ProgressBar size="xl" value={90} label="hello" />
        <ProgressBar size="2xl" value={90} label="hello" />
      </div>
      <Flex wrap gap="sm">
        <ProgressCircle size="2xs" value={15} label="hello" />
        <ProgressCircle size="xs" value={15} label="hello" />
        <ProgressCircle size="sm" value={30} label="hello" />
        <ProgressCircle size="md" value={45} label="hello" />
        <ProgressCircle size="lg" value={60} label="hello" />
        <ProgressCircle size="xl" value={90} label="hello" />
        <ProgressCircle size="2xl" value={95} label="hello" />
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
