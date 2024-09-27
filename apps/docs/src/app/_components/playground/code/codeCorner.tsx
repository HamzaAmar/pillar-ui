import { Code } from '@pillar-ui/core'

export const CodeCorner = () => {
  return (
    <>
      <Code corner="sharp">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="3">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="sm">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="md">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="lg">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="circle">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="full">{`console.log('Hello world Every thing is OK')`}</Code>
    </>
  )
}
