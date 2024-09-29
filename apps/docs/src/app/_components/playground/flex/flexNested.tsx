import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48p" ratio="1" background="b-6" corner="2" className="Fc" {...props} />
}

export const FlexNested = () => {
  return (
    <>
      <Flex gap="4" direction="col">
        <Box className="fl-1">header</Box>
        <Flex gap="4">
          <Box className="fl-1">sidebar</Box>
          <Box className="fl-2">main</Box>
          <Box className="fl-1">sidebar</Box>
        </Flex>
        <Box className="fl-1">footer</Box>
      </Flex>
    </>
  )
}
