import React, { CSSProperties } from 'react'
import type { Meta } from '@storybook/react'
import { Flex, Code, Paper } from '@pillar-ui/core'

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
}

export default meta

export const CodeColors = () => {
  return (
    <Flex gap="sm" direction="column" justify="center">
      <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="suc">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="war">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="pri">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="bg">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="sec">{`console.log('Hello world Every thing is OK')`}</Code>
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
      <Code color="bg" corner="sharp">
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
      <Code color="war" corner="sharp">
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
      <Code color="war" corner="sharp">
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

export function ButtonCornerDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm" direction="column">
        <Paper corner="sharp">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="sm">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="md">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="lg">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
      </Flex>

      <Flex gap="sm" direction="column" style={{ '--code-rad': '1px' } as CSSProperties}>
        <Paper corner="sharp">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="sm">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="md">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="lg">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
      </Flex>
      <Flex gap="sm" direction="column" style={{ '--code-rad': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="sm">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="md">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="lg">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
      </Flex>

      <Flex gap="sm" direction="column" style={{ '--code-rad': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="sm">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="md">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="lg">
          <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Code color="dan">{`console.log('Hello world Every thing is OK')`}</Code>
      </Flex>
    </div>
  )
}
