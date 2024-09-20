import { Checkbox, Flex } from '@pillar-ui/core'

export const CheckboxDisabled = () => {
  return (
    <>
      <Flex gap="sm" items="center">
        <Checkbox disabled name="hello" label="Hello" color="dan" />
        <Checkbox disabled name="hello" label="Hello" color="suc" />
        <Checkbox disabled name="hello" label="Hello" color="war" />
        <Checkbox disabled name="hello" label="Hello" color="pri" />
        <Checkbox disabled name="hello" label="Hello" color="sec" />
        <Checkbox disabled name="hello" label="Hello" color="bg" />
      </Flex>
      <Flex gap="sm" items="center">
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="dan" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="suc" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="war" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="pri" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="sec" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="bg" />
      </Flex>
    </>
  )
}
