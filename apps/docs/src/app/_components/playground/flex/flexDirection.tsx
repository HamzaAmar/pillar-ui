import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="bg-6" corner="sm" className="u_center" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)

export const FlexDirection = () => {
  return (
    <>
      <Flex gap="sm">{boxes}</Flex>
      <Flex gap="sm" direction="column">
        {boxes}
      </Flex>
    </>
  )
}
