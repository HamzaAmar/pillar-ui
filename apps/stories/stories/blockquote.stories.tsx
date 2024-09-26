import React, { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Blockquote, BlockquoteCite, Flex, Paper } from '@pillar-ui/core'

const meta: Meta<typeof Blockquote> = {
  title: 'Components/Blockquote',
  component: Blockquote,
}

export default meta

export const BlockquoteSize = () => {
  return (
    <div className="l_f-md">
      <Blockquote size="3xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="2xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
    </div>
  )
}

export const BlockquoteCorner = () => {
  return (
    <div className="l_f-md">
      <Blockquote corner="sharp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="lg">
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
    <div className="l_f-md">
      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="s">
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
    <div className="l_f-md">
      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <BlockquoteCite title="Hello world" />
      </Blockquote>

      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <BlockquoteCite title="Hello world" align="end" />
      </Blockquote>

      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <BlockquoteCite title="Hello world" align="center" />
      </Blockquote>
    </div>
  )
}

export const BlockquoteCustomStyle = () => {
  return (
    <Flex gap="sm">
      <Blockquote color="d" className="u_warning">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <BlockquoteCite title="Hello world" align="end" />
      </Blockquote>
      <Blockquote style={{ background: 'red' }} color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <BlockquoteCite title="Hello world" />
      </Blockquote>
    </Flex>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="l_f-sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="sm">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="md">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="lg">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Blockquote size="3xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Flex>

      <Flex gap="sm" style={{ '--blockquote-rad': '0' } as CSSProperties}>
        <Paper corner="sharp">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="sm">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="md">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="lg">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Blockquote size="3xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Flex>
      <Flex gap="sm" style={{ '--blockquote-rad': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="sm">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="md">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="lg">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Blockquote size="3xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Flex>

      <Flex gap="sm" style={{ '--blockquote-rad': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="sm">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="md">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="lg">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Blockquote size="3xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Flex>
    </div>
  )
}

export const Playground: StoryObj<typeof Blockquote> = {}
