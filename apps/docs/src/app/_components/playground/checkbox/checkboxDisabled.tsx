import { Checkbox, Flex } from '@pillar-ui/core'

export const CheckboxDisabled = () => {
  return (
    <>
      <Flex gap="4" items="center">
        <Checkbox disabled name="hello" label="Hello" color="d" />
        <Checkbox disabled name="hello" label="Hello" color="s" />
        <Checkbox disabled name="hello" label="Hello" color="w" />
        <Checkbox disabled name="hello" label="Hello" color="p" />
        <Checkbox disabled name="hello" label="Hello" color="se" />
        <Checkbox disabled name="hello" label="Hello" color="b" />
      </Flex>
      <Flex gap="4" items="center">
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="d" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="s" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="w" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="p" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="se" />
        <Checkbox disabled defaultChecked name="hello" label="Hello" color="b" />
      </Flex>
    </>
  )
}
