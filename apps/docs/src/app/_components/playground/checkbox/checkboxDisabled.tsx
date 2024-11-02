import { Checkbox, Flex } from '@pillar-ui/core'

export const CheckboxDisabled = () => {
  return (
    <>
      <Flex gap="4" items="center">
        <Checkbox disabled name="hello" color="d">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="su">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="w">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="p">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="se">
          Hello world
        </Checkbox>
        <Checkbox disabled name="hello" color="b">
          Hello world
        </Checkbox>
      </Flex>
      <Flex gap="4" items="center">
        <Checkbox disabled defaultChecked name="hello" color="d">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="su">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="w">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="p">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="se">
          Hello world
        </Checkbox>
        <Checkbox disabled defaultChecked name="hello" color="b">
          Hello world
        </Checkbox>
      </Flex>
    </>
  )
}
