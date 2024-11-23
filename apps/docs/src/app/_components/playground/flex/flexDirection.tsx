import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48p" ratio="1" background="W8" corner="2" className="F-c" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)

export const FlexDirection = () => {
  return (
    <Paper flow="8">
      <Flex className="ex-striped" gap="4">
        {boxes}
      </Flex>
      <Flex className="ex-striped" gap="4" direction="col">
        {boxes}
      </Flex>
    </Paper>
  )
}
