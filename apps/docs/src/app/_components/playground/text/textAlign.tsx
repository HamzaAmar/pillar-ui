import { Text } from '@pillar-ui/core'

const TEXT =
  ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi'
export const TextAlign = () => {
  return (
    <>
      <Text align="start">{TEXT}</Text>
      <Text align="center">{TEXT}</Text>
      <Text align="end">{TEXT}</Text>
    </>
  )
}
