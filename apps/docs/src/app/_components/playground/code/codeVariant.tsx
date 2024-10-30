import { Code } from '@pillar-ui/core'

export const CodeVariant = () => {
  return (
    <>
      <Code variant="solid">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code variant="mixed">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code variant="soft">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code variant="outline">{`console.log('Hello world Every thing is OK')`}</Code>
    </>
  )
}
