import { Flex, Text, SkeletonText } from '@pillar-ui/core'

const SIZES = Array.from({ length: 9 }, (_, index) => `${index + 1}`) as ['1', '2', '3', '4', '5', '6', '7', '8', '9']

export const SkeletonTextSize = () => {
  return (
    <>
      {SIZES.map((i) => (
        <SkeletonText key={i} size={i} isLoading={true} lines={3}>
          <Text size="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellendus rerum enim nostrum reiciendis sed
            rem quo autem recusandae praesentium dicta, totam corrupti nisi vel vitae odio quam repudiandae nemo?
          </Text>
        </SkeletonText>
      ))}
    </>
  )
}
