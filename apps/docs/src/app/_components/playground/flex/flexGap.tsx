import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="bg-6" corner="sm" className="u_center" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)
export const FlexGap = () => {
  return (
    <>
      <Flex gap="2xs">{boxes}</Flex>
      <Flex gap="xs">{boxes}</Flex>
      <Flex gap="sm">{boxes}</Flex>
      <Flex gap="md">{boxes}</Flex>
      <Flex gap="lg">{boxes}</Flex>
      <Flex gap="xl">{boxes}</Flex>
      <Flex gap="2xl">{boxes}</Flex>
    </>
  )
}
