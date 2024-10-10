import React, { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Blockquote, Flex, Paper, Text } from '@pillar-ui/core'

const meta: Meta<typeof Blockquote> = {
  title: 'Components/Blockquote',
  component: Blockquote,
}

export default meta

export const BlockquoteSize = () => {
  return (
    <div className="Sf-4">
      <Blockquote size="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
    </div>
  )
}

export const BlockquoteCorner = () => {
  return (
    <div className="Sf-4">
      <Blockquote corner="0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="circle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
    </div>
  )
}

export const BlockquoteColor = () => {
  return (
    <div className="Sf-4">
      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="su">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="w">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="se">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="b">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
    </div>
  )
}

export const BlockquoteWithCite = () => {
  return (
    <div className="Sf-4">
      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Text>Hello world</Text>
      </Blockquote>

      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Text align="end">Hello world</Text>
      </Blockquote>

      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Text align="center">Hello world</Text>
      </Blockquote>
    </div>
  )
}

export const BlockquoteCustomStyle = () => {
  return (
    <Flex gap="4">
      <Blockquote color="d" className="Cw">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Text align="end">Hello world</Text>
      </Blockquote>
      <Blockquote style={{ background: 'red' }} color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Text>Hello world</Text>
      </Blockquote>
    </Flex>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="Sf-3">
      <Paper corner="0">
        <Blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Paper>
      <Paper style={{ '--blockquote-rad': '0' } as CSSProperties}>
        <Blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Paper>
      <Paper style={{ '--blockquote-rad': '10px' } as CSSProperties}>
        <Blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Paper>
      <Paper style={{ '--blockquote-rad': '20px' } as CSSProperties}>
        <Blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Paper>
    </div>
  )
}

export const Playground: StoryObj<typeof Blockquote> = {}
