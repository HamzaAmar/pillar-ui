import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="B6" corner="2" className="F-c" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)

export const FlexGap = () => {
  return (
    <Paper flow="6">
      <Flex>{boxes}</Flex>
      <Flex gap="1">{boxes}</Flex>
      <Flex gap="2">{boxes}</Flex>
      <Flex gap="3">{boxes}</Flex>
      <Flex gap="4">{boxes}</Flex>
      <Flex gap="5">{boxes}</Flex>
      <Flex gap="6">{boxes}</Flex>
      <Flex gap="7">{boxes}</Flex>
      <Flex gap="8">{boxes}</Flex>
      <Flex gap="9">{boxes}</Flex>
    </Paper>
  )
}
