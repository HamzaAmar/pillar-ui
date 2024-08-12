import {
  Paper,
  ProgressBar,
  ProgressCircle,
  Flex,
  ProgressBarStack,
  ProgressBarStackItem,
} from '~/component/core/pillar'

export const ProgressPlayGround = () => {
  return (
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
      <ProgressBar size="2xs" value={100} label="hello" />
      <ProgressBar size="xs" value={50} label="hello" />
      <ProgressBar size="xs" value={30} label="hello" />
      <ProgressBar size="2xs" value={12} label="hello" />
      <ProgressBar size="xs" value={22} label="hello" />
      <ProgressBar size="xs" value={50} label="hello" />
    </Paper>
  )
}

export const ProgressSizes = () => {
  return (
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
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
    </Paper>
  )
}

export const ProgressValue = () => {
  return (
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
      <ProgressBar size="2xs" value={100} label="hello" />
      <ProgressBar size="xs" value={50} label="hello" />
      <ProgressBar size="xs" value={30} label="hello" />
      <ProgressBar size="2xs" value={12} label="hello" />
      <ProgressBar size="xs" value={22} label="hello" />
      <ProgressBar size="xs" value={50} label="hello" />
    </Paper>
  )
}

export const ProgressLabel = () => {
  return (
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
      <ProgressBar value={90} label="Video Time" />
      <ProgressBar value={90} label="Download percentage" />
      <ProgressBar value={90} label="Video Time" />
      <ProgressBar value={90} label="Download percentage" />
    </Paper>
  )
}

export const ProgressColors = () => {
  return (
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
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
    </Paper>
  )
}

export const ProgressMin = () => {
  return (
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
      <div className="l_f-sm">
        <ProgressBar value={50} min={0} label="hello" />
        <ProgressBar value={500} min={0} label="hello" />
        <ProgressBar value={250} min={-100} label="hello" />
      </div>
      <Flex gap="sm" wrap>
        <ProgressCircle value={50} min={0} label="hello" />
        <ProgressCircle value={500} min={0} label="hello" />
        <ProgressCircle value={250} min={-100} label="hello" />
      </Flex>
    </Paper>
  )
}

export const ProgressMax = () => {
  return (
    <Paper flow="sm" border p="sm" background="bg-3" corner="sm">
      <div className="l_f-sm">
        <ProgressBar value={50} max={1000} label="hello" />
        <ProgressBar value={500} max={100} label="hello" />
        <ProgressBar value={250} max={50} label="hello" />
        <ProgressBar value={250} min={60} max={120} showValue label="hello" />
      </div>
      <Flex gap="sm" wrap>
        <ProgressCircle value={50} max={1000} label="hello" />
        <ProgressCircle value={500} max={100} label="hello" />
        <ProgressCircle value={250} max={50} label="hello" />
        <ProgressCircle value={250} min={60} max={120} label="hello" />
      </Flex>
    </Paper>
  )
}
