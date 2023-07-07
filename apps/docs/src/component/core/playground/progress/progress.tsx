import { Paper, ProgressBar, ProgressCircle, Flex, ProgressBarStack } from '@pillar/core'

export const ProgressPlayGround = () => {
  return (
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
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
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <div className="l_flow__sm">
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
        <ProgressBarStack.Item label="CSS" color="danger" value={30}>
          <button>CSS 30</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="HTML" color="success" value={15}>
          <button>HTML 15%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="React" color="secondary" value={25}>
          <button>React 25%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="Node" color="primary" value={15}>
          <button>Node 15%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="SCSS" color="warning" value={15}>
          <button>SCSS 15%</button>
        </ProgressBarStack.Item>
      </ProgressBarStack>
    </Paper>
  )
}

export const ProgressValue = () => {
  return (
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
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
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <ProgressBar value={90} label="Video Time" />
      <ProgressBar value={90} label="Download percentage" />
      <ProgressBar value={90} label="Video Time" />
      <ProgressBar value={90} label="Download percentage" />
    </Paper>
  )
}

export const ProgressColors = () => {
  return (
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <div className="l_flow__sm">
        <ProgressBar color="danger" value={90} label="hello" />
        <ProgressBar color="success" value={90} label="hello" />
        <ProgressBar color="warning" value={90} label="hello" />
        <ProgressBar color="secondary" value={90} label="hello" />
        <ProgressBar color="surface" value={90} label="hello" />
        <ProgressBar color="primary" value={90} label="hello" />
      </div>

      <Flex gap="sm" wrap>
        <ProgressCircle color="danger" value={90} label="hello" />
        <ProgressCircle color="success" value={90} label="hello" />
        <ProgressCircle color="warning" value={90} label="hello" />
        <ProgressCircle color="secondary" value={90} label="hello" />
        <ProgressCircle color="surface" value={90} label="hello" />
        <ProgressCircle color="primary" value={90} label="hello" />
      </Flex>

      <ProgressBarStack label="Nice to meet you">
        <ProgressBarStack.Item label="CSS" color="danger" value={30}>
          <button>CSS 30</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="HTML" color="success" value={15}>
          <button>HTML 15%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="React" color="secondary" value={25}>
          <button>React 25%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="Node" color="primary" value={15}>
          <button>Node 15%</button>
        </ProgressBarStack.Item>
        <ProgressBarStack.Item label="SCSS" color="warning" value={15}>
          <button>SCSS 15%</button>
        </ProgressBarStack.Item>
      </ProgressBarStack>
    </Paper>
  )
}

export const ProgressMin = () => {
  return (
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <div className="l_flow__sm">
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
    <Paper flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <div className="l_flow__sm">
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

ProgressPlayGround.Colors = ProgressColors
ProgressPlayGround.Sizes = ProgressSizes
ProgressPlayGround.Corners = ProgressLabel
ProgressPlayGround.Label = ProgressLabel
ProgressPlayGround.Value = ProgressValue
ProgressPlayGround.Min = ProgressMin
ProgressPlayGround.Max = ProgressMax
