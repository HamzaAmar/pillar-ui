import { Flex, Text, SkeletonText } from '@pillar-ui/core'

export const SkeletonTextLines = () => {
  return (
    <>
      <SkeletonText size="3" isLoading={true} lines={3}>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellendus rerum enim nostrum reiciendis sed
          rem quo autem recusandae praesentium dicta, totam corrupti nisi vel vitae odio quam repudiandae nemo?
        </Text>
      </SkeletonText>
      <SkeletonText size="3" isLoading={true} lines={3.5}>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellendus rerum enim nostrum reiciendis sed
          rem quo autem recusandae praesentium dicta, totam corrupti nisi vel vitae odio quam repudiandae nemo?
        </Text>
      </SkeletonText>
      <SkeletonText size="3" isLoading={true} lines={2.3}>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellendus rerum enim nostrum reiciendis sed
          rem quo autem recusandae praesentium dicta, totam corrupti nisi vel vitae odio quam repudiandae nemo?
        </Text>
      </SkeletonText>
      <SkeletonText size="3" isLoading={true} lines={3.3}>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellendus rerum enim nostrum reiciendis sed
          rem quo autem recusandae praesentium dicta, totam corrupti nisi vel vitae odio quam repudiandae nemo?
        </Text>
      </SkeletonText>
      <SkeletonText size="3" isLoading={true} lines={1.13}>
        <Text size="3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellendus rerum enim nostrum reiciendis sed
          rem quo autem recusandae praesentium dicta, totam corrupti nisi vel vitae odio quam repudiandae nemo?
        </Text>
      </SkeletonText>
    </>
  )
}
