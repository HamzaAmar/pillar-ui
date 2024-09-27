import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="b-6" corner="2" className="u_center" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)
export const FlexGap = () => {
  return (
    <>
      <Flex gap="2">{boxes}</Flex>
      <Flex gap="3">{boxes}</Flex>
      <Flex gap="4">{boxes}</Flex>
      <Flex gap="5">{boxes}</Flex>
      <Flex gap="6">{boxes}</Flex>
      <Flex gap="7">{boxes}</Flex>
      <Flex gap="8">{boxes}</Flex>
    </>
  )
}
