import { Flex, Spinner } from '@pillar-ui/core'

export const SpinnerInvert = () => {
  return (
    <>
      <Flex gap="sm" items="center">
        <Spinner color="suc" />
        <Spinner color="dan" />
        <Spinner color="war" />
        <Spinner color="pri" />
        <Spinner color="sec" />
        <Spinner color="bg" />
      </Flex>
      <Flex gap="sm" items="center">
        <Spinner invert color="suc" />
        <Spinner invert color="dan" />
        <Spinner invert color="war" />
        <Spinner invert color="pri" />
        <Spinner invert color="sec" />
        <Spinner invert color="bg" />
      </Flex>
    </>
  )
}
