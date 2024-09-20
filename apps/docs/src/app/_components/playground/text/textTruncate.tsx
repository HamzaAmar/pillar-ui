import { Text } from '@pillar-ui/core'
const TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis id hic quo mollitia eos officia natus autem pariatur deleniti, maxime ea dolorum nisi sequi sed laudantium, necessitatibus exercitationem dicta perferendis. Adipisci magnam obcaecati veniam ea sint sed ex cumque molestiae amet blanditiis! Unde soluta similique, recusandae molestias illum molestiae cumque assumenda necessitatibus vel impedit hic ipsum ullam explicabo dolores sint quaerat distinctio facilis totam nesciunt placeat incidunt quo. Praesentium fuga repellendus, quae suscipit est quidem recusandae quia? Praesentium, ullam laborum repellendus, quae suscipit est quidem recusandae quia? Praesentium, ullam laborum?'
export const TextTruncate = () => {
  return (
    <>
      <Text truncate="1">{TEXT}</Text>
      <Text truncate="2">{TEXT}</Text>
      <Text truncate="3">{TEXT}</Text>
      <Text truncate="4">{TEXT}</Text>

      <Text truncate="5">{TEXT}</Text>

      <Text>{TEXT}</Text>
    </>
  )
}
