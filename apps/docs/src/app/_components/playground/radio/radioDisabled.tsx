import { Radio, Flex } from '@pillar-ui/core'

export const RadioDisabled = () => {
  return (
    <>
      <Flex gap="4" items="center">
        <Radio disabled name="hello" color="d">
          Hello world
        </Radio>
        <Radio disabled name="hello" color="su">
          Hello world
        </Radio>
        <Radio disabled name="hello" color="w">
          Hello world
        </Radio>
        <Radio disabled name="hello" color="p">
          Hello world
        </Radio>
        <Radio disabled name="hello" color="se">
          Hello world
        </Radio>
        <Radio disabled name="hello" color="b">
          Hello world
        </Radio>
      </Flex>
      <Flex gap="4" items="center">
        <Radio disabled defaultChecked name="hello" color="d">
          Hello world
        </Radio>
        <Radio disabled defaultChecked name="hello" color="su">
          Hello world
        </Radio>
        <Radio disabled defaultChecked name="hello" color="w">
          Hello world
        </Radio>
        <Radio disabled defaultChecked name="hello" color="p">
          Hello world
        </Radio>
        <Radio disabled defaultChecked name="hello" color="se">
          Hello world
        </Radio>
        <Radio disabled defaultChecked name="hello" color="b">
          Hello world
        </Radio>
      </Flex>
    </>
  )
}
