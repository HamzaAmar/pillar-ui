import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flex, Code } from '@pillar/core'

export default {
  code: 'Components/Code',
  component: Code,
} as ComponentMeta<typeof Code>

export const CodeColors = () => {
  return (
    <Flex gap="sm" direction="column" justify="center">
      <Code color="red">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="success">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="orange">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="indigo">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="slate">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="brown">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="violet">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="purple">{`console.log('Hello world Every thing is OK')`}</Code>
    </Flex>
  )
}

export const CodeSizes = () => {
  return (
    <Flex gap="sm" direction="column" justify="center">
      <Code size="2xs">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="xs">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="sm">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="md">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="lg">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="xl">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="2xl">{`console.log('Hello world Every thing is OK')`}</Code>
    </Flex>
  )
}

export const CodeCorners = () => {
  return (
    <Flex gap="sm" direction="column" justify="center">
      <Code corner="sharp">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="sm">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="md">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="xl">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="full">{`console.log('Hello world Every thing is OK')`}</Code>
    </Flex>
  )
}

export const CodeLong = () => {
  return (
    <Flex gap="sm" direction="column" justify="center">
      <Code corner="sharp">
        {`<div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione praesentium minima, commodi architecto
          provident neque cumque beatae iste eaque ipsam perspiciatis et enim quaerat qui animi mollitia assumenda
          laborum reiciendis.
        </div>`}
      </Code>
      <Code color="slate" corner="sharp">
        {`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
            </head>
            <body>
              <h1>Hello world</h1>
            </body>
            </html>`}
      </Code>
      <Code color="orange" corner="sharp">
        {`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
            </head>
            <body>
              <h1>Hello world</h1>
            </body>
            </html>`}
      </Code>
      <Code color="orange" corner="sharp">
        {`<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
            </head>
            <body>
              <h1>Hello world</h1>
            </body>
            </html>`}
      </Code>
    </Flex>
  )
}
