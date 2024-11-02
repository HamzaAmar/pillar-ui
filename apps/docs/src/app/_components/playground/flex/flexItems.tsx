import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48p" ratio="1" style={{ background: 'var(--W11)' }} corner="2" className="F-c" {...props} />
}

export const FlexItems = () => {
  return (
    <>
      <Flex gap="4" as={Paper} height="192p" p="3" style={{ background: 'var(--W6)' }}>
        <Box />
        <Box />
        <Box />
      </Flex>
      <Flex gap="4" items="center" as={Paper} p="3" height="192p" style={{ background: 'var(--W6)' }}>
        <Box />
        <Box />
        <Box />
      </Flex>
      <Flex gap="4" items="end" as={Paper} p="3" height="192p" style={{ background: 'var(--W6)' }}>
        <Box />
        <Box />
        <Box />
      </Flex>

      <Flex gap="4" items="start" as={Paper} p="3" height="192p" style={{ background: 'var(--W6)' }}>
        <Box />
        <Box />
        <Box />
      </Flex>
    </>
  )
}
