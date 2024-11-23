import { Flex, Paper, Text } from '@pillar-ui/core'

const Box = ({ children, ...rest }: any) => {
  return (
    <Paper border p="4" background="W9" corner="2" className="F-c" {...rest}>
      <Text weight="6">{children}</Text>
    </Paper>
  )
}

export const FlexJustify = () => {
  return (
    <>
      <Flex className="ex-striped" gap="4">
        <Box>Start</Box>
      </Flex>
      <Flex className="ex-striped" gap="4" justify="center">
        <Box>Center</Box>
      </Flex>
      <Flex className="ex-striped" gap="4" justify="end">
        <Box>End</Box>
      </Flex>
      <Flex className="ex-striped" gap="4" justify="between">
        <Box>Between</Box>
        <Box>Between</Box>
      </Flex>
      <Flex className="ex-striped" gap="4" justify="around">
        <Box>Around</Box>
        <Box>Around</Box>
      </Flex>
      <Flex className="ex-striped" gap="4" justify="evenly">
        <Box>Evenly</Box>
        <Box>Evenly</Box>
      </Flex>
    </>
  )
}
