import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="b-6" corner="2" className="u_center" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)
export const FlexJustify = () => {
  return (
    <>
      <Flex gap="4">{boxes}</Flex>
      <Flex gap="4" justify="center">
        {boxes}
      </Flex>
      <Flex gap="4" justify="end">
        {boxes}
      </Flex>
      <Flex gap="4" justify="between">
        {boxes}
      </Flex>
      <Flex gap="4" justify="around">
        {boxes}
      </Flex>
      <Flex gap="4" justify="evenly">
        {boxes}
      </Flex>
    </>
  )
}
