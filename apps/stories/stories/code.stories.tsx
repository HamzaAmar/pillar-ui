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
    <Flex gap="4" direction="col" justify="center">
      <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="su">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="w">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="p">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="b">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="se">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code color="i">{`console.log('Hello world Every thing is OK')`}</Code>
    </Flex>
  )
}

export const CodeSizes = () => {
  return (
    <Flex gap="4" direction="col" justify="center">
      <Code size="1">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="2">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="3">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="4">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="5">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="6">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="7">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="8">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code size="9">{`console.log('Hello world Every thing is OK')`}</Code>
    </Flex>
  )
}

export const CodeCorners = () => {
  return (
    <Flex gap="4" direction="col" justify="center">
      <Code corner="0">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="2">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="3">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="5">{`console.log('Hello world Every thing is OK')`}</Code>
      <Code corner="full">{`console.log('Hello world Every thing is OK')`}</Code>
    </Flex>
  )
}

export const CodeLong = () => {
  return (
    <Flex gap="4" direction="col" justify="center">
      <Code corner="0">
        {`<div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione praesentium minima, commodi architecto
          provident neque cumque beatae iste eaque ipsam perspiciatis et enim quaerat qui animi mollitia assumenda
          laborum reiciendis.
        </div>`}
      </Code>
      <Code color="b" corner="0">
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
      <Code color="w" corner="0">
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
      <Code color="w" corner="0">
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
    <div className="Sf-3">
      <Flex gap="4" direction="col">
        <Paper corner="0">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="2">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="3">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="4">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
      </Flex>

      <Flex gap="4" direction="col" style={{ '--code-rad': '1px' } as CSSProperties}>
        <Paper corner="0">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="2">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="3">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="4">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
      </Flex>
      <Flex gap="4" direction="col" style={{ '--code-rad': '10px' } as CSSProperties}>
        <Paper corner="0">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="2">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="3">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="4">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
      </Flex>

      <Flex gap="4" direction="col" style={{ '--code-rad': '20px' } as CSSProperties}>
        <Paper corner="0">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="2">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="3">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Paper corner="4">
          <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
        </Paper>
        <Code color="d">{`console.log('Hello world Every thing is OK')`}</Code>
      </Flex>
    </div>
  )
}

export function CodeCornerDefaults() {
  return (
    <div className="Sf-3">
      <Code color="d">{`const animals = ['pigs', 'goats', 'sheep'];
                        const count = animals.push('cows');
                        console.log(count);
                        // Expected output: 4
                        console.log(animals);
                        // Expected output: Array ["pigs", "goats", "sheep", "cows"]

                        animals.push('chickens', 'cats', 'dogs');
                        console.log(animals);
                        // Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs","pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]`}</Code>
    </div>
  )
}
