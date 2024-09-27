import { Code } from '@pillar-ui/core'

export const CodeCorner = () => {
  return (
    <>
      <Code corner="0">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="3">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="2">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="3">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="4">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="circle">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="full">{`console.log('Hello world Every thing is OK')`}</Code>
    </>
  )
}
