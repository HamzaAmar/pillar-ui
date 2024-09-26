import { Flex, Paper } from '@pillar-ui/core'

const Box = (props: any) => {
  return <Paper width="48px" ratio="1" background="b-6" corner="sm" className="u_center" {...props} />
}
const boxes = Array.from({ length: 5 }, (_, index) => <Box key={index} />)

export const FlexWrap = () => {
  return (
    <>
      <Flex wrap gap="sm">
        {boxes}
        {boxes}
        {boxes}
        {boxes}
        {boxes}
        {boxes}
      </Flex>
    </>
  )
}
