import { Flex, Spinner } from '@pillar-ui/core'

export const SpinnerInvert = () => {
  return (
    <>
      <Flex gap="4" items="center">
        <Spinner color="s" />
        <Spinner color="d" />
        <Spinner color="w" />
        <Spinner color="p" />
        <Spinner color="se" />
        <Spinner color="b" />
      </Flex>
      <Flex gap="4" items="center">
        <Spinner invert color="s" />
        <Spinner invert color="d" />
        <Spinner invert color="w" />
        <Spinner invert color="p" />
        <Spinner invert color="se" />
        <Spinner invert color="b" />
      </Flex>
    </>
  )
}
