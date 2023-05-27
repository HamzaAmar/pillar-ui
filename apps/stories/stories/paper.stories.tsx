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
      <Paper background="brown">Hello</Paper>
      <Paper background="red">Hello</Paper>
      <Paper background="orange">Hello</Paper>
      <Paper background="green">Hello</Paper>
      <Paper background="purple">Hello</Paper>
      <Paper background="violet">Hello</Paper>
      <Paper background="indigo">Hello</Paper>
      <Paper background="slate">Hello</Paper>
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
      <Paper padding="xl" background="violet">
        Hello
      </Paper>
      <Paper padding="2xl" background="indigo">
        Hello
      </Paper>
    </div>
  )
}

export function PaperCorner() {
  return (
    <div className="l_flow__md">
      <Paper padding="sm" background="slate-4">
        Hello
      </Paper>
      <Paper padding="sm" background="slate-4" corner="xs">
        Hello
      </Paper>
      <Paper padding="sm" background="slate-4" corner="sm">
        Hello
      </Paper>
      <Paper padding="sm" background="slate-4" corner="md">
        Hello
      </Paper>
      <Paper padding="sm" background="slate-4" corner="lg">
        Hello
      </Paper>
      <Paper padding="sm" background="slate-4" corner="xl">
        Hello
      </Paper>
      <Paper padding="sm" background="slate-4" corner="full">
        Hello
      </Paper>
      <Paper padding="sm" background="slate-4" corner="circle">
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
      <Paper padding="sm" background="red-4" color="red">
        Hello
      </Paper>
      <Paper padding="sm" background="green-4" color="green" corner="xs">
        Hello
      </Paper>
      <Paper padding="sm" background="orange-4" color="orange" corner="sm">
        Hello
      </Paper>
      <Paper padding="sm" background="brown-4" color="brown" corner="md">
        Hello
      </Paper>
      <Paper padding="sm" background="purple-4" color="purple" corner="lg">
        Hello
      </Paper>
      <Paper padding="sm" background="violet-4" color="violet" corner="xl">
        Hello
      </Paper>
      <Paper padding="sm" background="slate-4" color="slate" corner="full">
        Hello
      </Paper>
      <Paper padding="sm" background="indigo-4" color="indigo" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperWidths() {
  return (
    <div className="l_flow__md">
      <Paper background="red-4" color="red">
        Hello
      </Paper>
      <Paper width="100px" background="green-4" color="green">
        Hello
      </Paper>
      <Paper width="50%" background="orange-4" color="orange">
        Hello
      </Paper>
      <Paper width="70%" background="brown-4" color="brown">
        Hello
      </Paper>
      <Paper width="100ch" background="purple-4" color="purple">
        Hello
      </Paper>
      <Paper width="15rem" background="violet-4" color="violet">
        Hello
      </Paper>
      <Paper width="min(100px, 10rem)" background="slate-4" color="slate">
        Hello
      </Paper>
      <Paper width="100vw" background="indigo-4" color="indigo">
        Hello
      </Paper>
    </div>
  )
}

export function PaperHeights() {
  return (
    <div className="l_flow__md">
      <Paper height="100px" background="red-4" color="red">
        Hello
      </Paper>
      <Paper height="5rem" background="green-4" color="green">
        Hello
      </Paper>
      <Paper height="20ch" background="orange-4" color="orange">
        Hello
      </Paper>
      <Paper height="70px" background="brown-4" color="brown">
        Hello
      </Paper>
      <Paper height="20vh" background="purple-4" color="purple">
        Hello
      </Paper>
      <Paper height="30vmin" background="violet-4" color="violet">
        Hello
      </Paper>
      <Paper height="min(100px, 8rem)" background="slate-4" color="slate">
        Hello
      </Paper>
      <Paper background="indigo-4" color="indigo">
        Hello
      </Paper>
    </div>
  )
}

// export const PaperColors = () => {
//   return (
//     <Flex gap="sm" direction="column">
//       <PaperBase color="danger" />
//       <PaperBase color="brown" />
//       <PaperBase color="warning" />
//       <PaperBase color="success" />
//       <PaperBase color="purple" />
//       <PaperBase color="violet" />
//       <PaperBase color="indigo" />
//       <PaperBase color="slate" />
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
//       <Paper color="danger" title="hello" style={{ background: 'green' }} />
//       <Paper color="danger" title="hello" className="u_violet" />
//     </Flex>
//   )
// }

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />
export const Playground = Template.bind({})
Playground.args = {}
