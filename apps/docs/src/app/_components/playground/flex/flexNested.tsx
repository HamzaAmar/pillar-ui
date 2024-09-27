import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="b-6" corner="2" className="u_center" {...props} />
}

export const FlexNested = () => {
  return (
    <>
      <Flex gap="4" direction="column">
        <Box className="l_fl-1">header</Box>
        <Flex gap="4">
          <Box className="l_fl-1">sidebar</Box>
          <Box className="l_fl-2">main</Box>
          <Box className="l_fl-1">sidebar</Box>
        </Flex>
        <Box className="l_fl-1">footer</Box>
      </Flex>
    </>
  )
}
