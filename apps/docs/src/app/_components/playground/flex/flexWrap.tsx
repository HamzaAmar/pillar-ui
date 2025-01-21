import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="B6" corner="2" className="F-c" {...props} />
}

const boxes = Array.from({ length: 25 }, (_, index) => <Box key={index} />)

export const FlexWrap = () => {
  return (
    <>
      <Flex wrap gap="4">
        {boxes}
      </Flex>
    </>
  )
}
