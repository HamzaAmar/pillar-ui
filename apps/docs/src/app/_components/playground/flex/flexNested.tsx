import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="bg-6" corner="sm" className="u_center" {...props} />
}

export const FlexNested = () => {
  return (
    <>
      <Flex gap="sm" direction="column">
        <Box className="l_fl-1">header</Box>
        <Flex gap="sm">
          <Box className="l_fl-1">sidebar</Box>
          <Box className="l_fl-2">main</Box>
          <Box className="l_fl-1">sidebar</Box>
        </Flex>
        <Box className="l_fl-1">footer</Box>
      </Flex>
    </>
  )
}
