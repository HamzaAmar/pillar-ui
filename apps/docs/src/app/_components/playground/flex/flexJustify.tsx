import { Flex, Paper, Text } from '@pillar-ui/core'

const Box = ({ children, ...rest }: any) => {
  return (
    <Paper border p="4" style={{ background: 'var(--B5)' }} corner="2" className="F-c" {...rest}>
      <Text weight="6">{children}</Text>
    </Paper>
  )
}

export const FlexJustify = () => {
  return (
    <Paper width="100" flow="8">
      <Flex gap="4">
        <Box>Start</Box>
      </Flex>
      <Flex gap="4" justify="center">
        <Box>Center</Box>
      </Flex>
      <Flex gap="4" justify="end">
        <Box>End</Box>
      </Flex>
      <Flex gap="4" justify="between">
        <Box>Between</Box>
        <Box>Between</Box>
      </Flex>
      <Flex gap="4" justify="around">
        <Box>Around</Box>
        <Box>Around</Box>
      </Flex>
      <Flex gap="4" justify="evenly">
        <Box>Evenly</Box>
        <Box>Evenly</Box>
      </Flex>
    </Paper>
  )
}
