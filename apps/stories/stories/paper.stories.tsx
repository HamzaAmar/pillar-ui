import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Paper } from '@pillar/core'

export default {
  title: 'Components/Paper',
  component: Paper,
  args: {
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
} as ComponentMeta<typeof Paper>

// function PaperBase(props) {
//   return (
//     <Paper
//       {...props}
//       title="hello"
//       message="hello world my name is hamza miloud amar iam a full stack javascript developer"
//     />
//   )
// }

export function PaperBackground() {
  return (
    <div className="l_flow__md">
      <Paper>Hello</Paper>
      <Paper background="red">Hello</Paper>
      <Paper background="orange">Hello</Paper>
      <Paper background="green">Hello</Paper>
      <Paper background="secondary">Hello</Paper>
      <Paper background="primary">Hello</Paper>
      <Paper background="surface">Hello</Paper>
    </div>
  )
}

export function PaperPadding() {
  return (
    <div className="l_flow__md">
      <Paper padding="2xs" background="red">
        Hello
      </Paper>
      <Paper padding="xs" background="orange">
        Hello
      </Paper>
      <Paper padding="sm" background="green">
        Hello
      </Paper>
      <Paper padding="md" background="purple">
        Hello
      </Paper>
      <Paper padding="lg" background="purple">
        Hello
      </Paper>
      <Paper padding="xl" background="secondary">
        Hello
      </Paper>
      <Paper padding="2xl" background="primary">
        Hello
      </Paper>
    </div>
  )
}

export function PaperCorner() {
  return (
    <div className="l_flow__md">
      <Paper padding="sm" background="surface-4">
        Hello
      </Paper>
      <Paper padding="sm" background="surface-4" corner="xs">
        Hello
      </Paper>
      <Paper padding="sm" background="surface-4" corner="sm">
        Hello
      </Paper>
      <Paper padding="sm" background="surface-4" corner="md">
        Hello
      </Paper>
      <Paper padding="sm" background="surface-4" corner="lg">
        Hello
      </Paper>
      <Paper padding="sm" background="surface-4" corner="xl">
        Hello
      </Paper>
      <Paper padding="sm" background="surface-4" corner="full">
        Hello
      </Paper>
      <Paper padding="sm" background="surface-4" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperShadow() {
  return (
    <div className="l_flow__md">
      <Paper padding="sm">Hello</Paper>

      <Paper padding="sm" shadow="xs">
        Hello
      </Paper>
      <Paper padding="sm" shadow="sm">
        Hello
      </Paper>
      <Paper padding="sm" shadow="md">
        Hello
      </Paper>
      <Paper padding="sm" shadow="lg">
        Hello
      </Paper>
      <Paper padding="sm" shadow="xl">
        Hello
      </Paper>
    </div>
  )
}

export function PaperColors() {
  return (
    <div className="l_flow__md">
      <Paper padding="sm" background="red-4" color="danger">
        Hello
      </Paper>
      <Paper padding="sm" background="green-4" color="success" corner="xs">
        Hello
      </Paper>
      <Paper padding="sm" background="orange-4" color="warning" corner="sm">
        Hello
      </Paper>
      <Paper padding="sm" background="secondary-4" color="secondary" corner="xl">
        Hello
      </Paper>
      <Paper padding="sm" background="surface-4" color="surface" corner="full">
        Hello
      </Paper>
      <Paper padding="sm" background="primary-4" color="primary" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperWidths() {
  return (
    <div className="l_flow__md">
      <Paper background="red-4" color="danger">
        Hello
      </Paper>
      <Paper width="100px" background="green-4" color="success">
        Hello
      </Paper>
      <Paper width="50%" background="orange-4" color="warning">
        Hello
      </Paper>
      <Paper width="15rem" background="secondary-4" color="secondary">
        Hello
      </Paper>
      <Paper width="min(100px, 10rem)" background="surface-4" color="surface">
        Hello
      </Paper>
      <Paper width="100vw" background="primary-4" color="primary">
        Hello
      </Paper>
    </div>
  )
}

export function PaperHeights() {
  return (
    <div className="l_flow__md">
      <Paper height="100px" background="red-4" color="danger">
        Hello
      </Paper>
      <Paper height="5rem" background="green-4" color="success">
        Hello
      </Paper>
      <Paper height="20ch" background="orange-4" color="warning">
        Hello
      </Paper>
      <Paper height="30vmin" background="secondary-4" color="secondary">
        Hello
      </Paper>
      <Paper height="min(100px, 8rem)" background="surface-4" color="surface">
        Hello
      </Paper>
      <Paper background="primary-4" color="primary">
        Hello
      </Paper>
    </div>
  )
}

// export const PaperColors = () => {
//   return (
//     <Flex gap="sm" direction="column">
//       <PaperBase color="danger" />
//       <PaperBase color="warning" />
//       <PaperBase color="success" />
//       <PaperBase color="secondary" />
//       <PaperBase color="primary" />
//       <PaperBase color="surface" />
//     </Flex>
//   )
// }

// export const PaperSizes = () => {
//   return (
//     <Flex gap="sm" direction="column">
//       <PaperBase size="3xs" />
//       <PaperBase size="2xs" />
//       <PaperBase size="xs" />
//       <PaperBase size="sm" />
//       <PaperBase size="md" />
//       <PaperBase size="lg" />
//       <PaperBase size="xl" />
//       <PaperBase size="2xl" />
//       <PaperBase size="3xl" />
//     </Flex>
//   )
// }

// export const PaperCorner = () => {
//   return (
//     <Flex gap="sm" direction="column">
//       <PaperBase corner="sharp" />
//       <PaperBase corner="xs" />
//       <PaperBase corner="sm" />
//       <PaperBase corner="md" />
//       <PaperBase corner="lg" />
//       <PaperBase corner="xl" />
//       <PaperBase corner="full" />
//     </Flex>
//   )
// }

// export const PaperVariant = () => {
//   return (
//     <Flex direction="column" gap="sm">
//       <PaperBase variant="solid" />
//       <PaperBase variant="outline" />
//       <PaperBase variant="soft" />
//     </Flex>
//   )
// }

// export const PaperIcon = () => {
//   return (
//     <Flex direction="column" gap="sm">
//       <PaperBase icon={<CircleWarning width="20" />} color="danger" />
//       <PaperBase icon={<CircleCheck width="20" />} color="success" />
//       <PaperBase icon={<CircleWarning width="20" />} color="warning" />
//       <PaperBase icon={<CircleInfo width="20" />} color="info" />
//     </Flex>
//   )
// }

// export const PaperInline = () => {
//   return (
//     <Flex direction="column" gap="sm">
//       <PaperBase inline />
//       <PaperBase inline />
//       <PaperBase inline />
//       <PaperBase inline />
//       <PaperBase inline icon={<CircleWarning width="20" />} />
//       <PaperBase inline closable />
//       <PaperBase inline icon={<CircleWarning width="20" />} closable />
//     </Flex>
//   )
// }

// export const PaperTitleIcon = () => {
//   return (
//     <Flex direction="column" gap="sm">
//       <Paper color="danger" title="hello" />
//       <Paper color="success" message="hello world something is wrong in the app here we go" />
//       <Paper color="warning" icon={<CircleWarning width="20" />} title="hello" />
//       <Paper
//         color="warning"
//         icon={<CircleWarning width="20" />}
//         message="hello world something is wrong in the app here we go"
//       />
//       <Paper
//         color="warning"
//         icon={<CircleWarning width="20" />}
//         title="hello"
//         message="hello world something is wrong in the app here we go"
//       />
//     </Flex>
//   )
// }

// export const PaperCustomStyle = () => {
//   return (
//     <Flex direction="column" gap="sm">
//       <Paper color="danger" title="hello" style={{ background: 'success' }} />
//       <Paper color="danger" title="hello" className="u_secondary" />
//     </Flex>
//   )
// }

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />
export const Playground = Template.bind({})
Playground.args = {}
