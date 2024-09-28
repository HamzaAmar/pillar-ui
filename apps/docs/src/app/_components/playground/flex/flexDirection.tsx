import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48p" ratio="1" background="b-6" corner="2" className="Fc" {...props} />
}

const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)

export const FlexDirection = () => {
  return (
    <>
      <Flex gap="4">{boxes}</Flex>
      <Flex gap="4" direction="column">
        {boxes}
      </Flex>
    </>
  )
}
