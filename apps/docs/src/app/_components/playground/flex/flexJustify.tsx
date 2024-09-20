import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="bg-6" corner="sm" className="u_center" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)
export const FlexJustify = () => {
  return (
    <>
      <Flex gap="sm">{boxes}</Flex>
      <Flex gap="sm" justify="center">
        {boxes}
      </Flex>
      <Flex gap="sm" justify="end">
        {boxes}
      </Flex>
      <Flex gap="sm" justify="between">
        {boxes}
      </Flex>
      <Flex gap="sm" justify="around">
        {boxes}
      </Flex>
      <Flex gap="sm" justify="evenly">
        {boxes}
      </Flex>
    </>
  )
}
