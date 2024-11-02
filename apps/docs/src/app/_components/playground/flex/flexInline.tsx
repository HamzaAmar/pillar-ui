import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48p" ratio="1" style={{ background: 'var(--B6)' }} corner="2" className="F-c" {...props} />
}

export const FlexInline = () => {
  return (
    <Paper width="100" flow="8">
      <Flex inline gap="3">
        <Box />
        <Box />
      </Flex>
      <Flex inline gap="3">
        <Box />
        <Box />
      </Flex>
    </Paper>
  )
}
