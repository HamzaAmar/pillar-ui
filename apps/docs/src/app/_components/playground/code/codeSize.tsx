import { Code } from '@pillar-ui/core'

export const CodeSize = () => {
  return (
    <>
      <Code gap="2">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code gap="3">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="4">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code gap="5">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code gap="6">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code gap="7">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code gap="8">{`console.log('Hello world Every thing is OK')`}</Code>
    </>
  )
}
