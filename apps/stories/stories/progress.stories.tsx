import React from 'react'
import { Meta } from '@storybook/react'
import { Flex, ProgressBar, ProgressBarStack, ProgressBarStackItem, ProgressCircle } from '@pillar-ui/core'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'hello',
  },
}

export default meta

export const ProgressBarSize = () => {
  return (
    <Flex direction="column" gap="sm" wrap>
      <ProgressBar size="2xs" value={90} label="hello" />
      <ProgressBar size="xs" value={90} label="hello" />
      <ProgressBar size="sm" value={90} label="hello" />
      <ProgressBar size="md" value={90} label="hello" />
      <ProgressBar size="lg" value={90} label="hello" />
      <ProgressBar size="xl" value={90} label="hello" />
      <ProgressBar size="2xl" value={90} label="hello" />
    </Flex>
  )
}

export const ProgressBarColor = () => {
  return (
    <Flex direction="column" gap="sm" wrap>
      <ProgressBar color="danger" value={90} label="hello" />
      <ProgressBar color="success" value={90} label="hello" />
      <ProgressBar color="warning" value={90} label="hello" />
      <ProgressBar color="secondary" value={90} label="hello" />
      <ProgressBar color="surface" value={90} label="hello" />
      <ProgressBar color="primary" value={90} label="hello" />
    </Flex>
  )
}

export const ProgressBarRange = () => {
  return (
    <Flex direction="column" gap="sm" wrap>
      <ProgressBar value={90} label="hello" />
      <ProgressBar min={50} max={100} value={70} label="hello" />
      <ProgressBar min={-100} max={100} value={80} label="hello" />
      <ProgressBar min={0} max={1000} value={350} label="hello" />
      <ProgressBar min={0} max={10} value={9} label="hello" />
      <ProgressBar min={0.1} max={1} value={0.5} label="hello" />
      <ProgressBar min={0} max={100} value={90} label="hello" />
      <ProgressBar min={0} max={100} value={90} label="hello" />
    </Flex>
  )
}

export const ProgressCircleRange = () => {
  return (
    <Flex direction="column" gap="sm" wrap>
      <ProgressCircle value={90} label="hello" />
      <ProgressCircle min={50} max={100} value={70} label="hello" />
      <ProgressCircle min={-100} max={100} value={80} label="hello" />
      <ProgressCircle min={0} max={1000} value={350} label="hello" />
      <ProgressCircle min={0} max={10} value={9} label="hello" />
      <ProgressCircle min={0.1} max={1} value={0.9} label="hello" />
      <ProgressCircle min={0} max={100} value={90} label="hello" />
      <ProgressCircle min={0} max={100} value={90} label="hello" />
    </Flex>
  )
}

export const ProgressCircleSize = () => {
  return (
    <Flex gap="sm">
      <ProgressCircle size="2xs" value={15} label="hello" />
      <ProgressCircle size="xs" value={15} label="hello" />
      <ProgressCircle size="sm" value={30} label="hello" />
      <ProgressCircle size="md" value={45} label="hello" />
      <ProgressCircle size="lg" value={60} label="hello" />
      <ProgressCircle size="xl" value={90} label="hello" />
      <ProgressCircle size="2xl" value={95} label="hello" />
    </Flex>
  )
}

export const ProgressCircleColor = () => {
  return (
    <Flex gap="sm">
      <ProgressCircle color="danger" value={15} label="hello" />
      <ProgressCircle color="success" value={30} label="hello" />
      <ProgressCircle color="warning" value={60} label="hello" />
      <ProgressCircle color="primary" value={45} label="hello" />
      <ProgressCircle color="secondary" value={90} label="hello" />
      <ProgressCircle color="surface" value={90} label="hello" />
    </Flex>
  )
}

function ProgressBarStackBase(props) {
  return (
    <ProgressBarStack {...props} label="Nice to meet you">
      <ProgressBarStackItem label="CSS" color="danger" value={30}>
        <button>CSS 30</button>
      </ProgressBarStackItem>
      <ProgressBarStackItem label="HTML" color="success" value={15}>
        <button>HTML 15%</button>
      </ProgressBarStackItem>
      <ProgressBarStackItem label="React" color="secondary" value={25}>
        <button>React 25%</button>
      </ProgressBarStackItem>
      <ProgressBarStackItem label="Node" color="primary" value={15}>
        <button>Node 15%</button>
      </ProgressBarStackItem>
      <ProgressBarStackItem label="SCSS" color="warning" value={15}>
        <button>SCSS 15%</button>
      </ProgressBarStackItem>
    </ProgressBarStack>
  )
}

export const ProgressBarStackSizes = () => {
  return (
    <Flex direction="column" gap="sm" wrap>
      <ProgressBarStackBase size="3xs" />
      <ProgressBarStackBase size="2xs" />
      <ProgressBarStackBase size="xs" />
      <ProgressBarStackBase size="sm" />
      <ProgressBarStackBase size="md" />
      <ProgressBarStackBase size="xl" />
      <ProgressBarStackBase size="2xl" />
      <ProgressBarStackBase size="3xl" />
    </Flex>
  )
}

export const Playground = {
  args: {
    value: 50,
  },
}
