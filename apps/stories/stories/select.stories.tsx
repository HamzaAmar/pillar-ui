import React from 'react'
import type { Meta } from '@storybook/react'
import { Flex, Select } from '@pillar-ui/core'

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  args: {
    'aria-label': 'Nice',
  },
}

export default meta

const VARIANTS = ['filled', 'bordered', 'outline'] as const

export const SelectTypes = () => {
  return (
    <Flex gap="4" direction="col">
      <div className="Sf-4">
        {VARIANTS.map((variant) => (
          <Select key={variant} aria-label="hello" variant={variant}>
            <option value="helo">hello</option>
            <option value="nice">Nice</option>
          </Select>
        ))}
      </div>
    </Flex>
  )
}

export const OutlineStates = () => {
  return (
    <Flex gap="4" direction="col">
      <div className="Sf-4">
        {VARIANTS.map((variant) => (
          <div className="Sf-4" key={variant}>
            <h2>{variant}</h2>
            <Select aria-label="hello" disabled variant={variant}>
              <option value="helo">hello</option>
              <option value="nice">Nice</option>
            </Select>
            <Select aria-label="hello" isInvalid variant={variant}>
              <option value="helo">hello</option>
              <option value="nice">Nice</option>
            </Select>
          </div>
        ))}
      </div>
    </Flex>
  )
}

export const CornerSelect = () => {
  return (
    <Flex gap="4" direction="col">
      <Select corner="0">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="3">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="2">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="3">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="4">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="5">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select corner="full">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const SizeSelect = () => {
  return (
    <Flex gap="4" direction="col">
      <Select size="3">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select size="4">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select size="6">
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const ColorSelect = () => {
  return (
    <Flex gap="4" direction="col">
      <Select color="p" variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="w" variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="se" variant="outline" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="b" variant="filled" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="su" variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
      <Select color="d" variant="bordered" autoFocus>
        <option value="helo">hello</option>
        <option value="nice">Nice</option>
      </Select>
    </Flex>
  )
}

export const Playground = {}
