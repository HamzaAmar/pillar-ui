import { Checkbox, Text } from '@pillar-ui/core'

export const CheckboxContent = () => {
  return (
    <>
      <Checkbox name="nice">Hello world</Checkbox>
      <Checkbox name="to">
        <Text weight="5">Hello world</Text>
        <Text color="b" low size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis molestias molestiae repellendus
          ipsum qui ad voluptas vel eligendi perspiciatis id in hic iure quis aperiam fugit, asperiores earum nesciunt.
        </Text>
      </Checkbox>
      <Checkbox name="to">
        <Text weight="5">Hello world</Text>
        <Text color="b" low size="3" width="60c">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nobis molestias molestiae repellendus
          ipsum qui ad voluptas vel eligendi perspiciatis id in hic iure quis aperiam fugit, asperiores earum nesciunt.
        </Text>
      </Checkbox>
    </>
  )
}
