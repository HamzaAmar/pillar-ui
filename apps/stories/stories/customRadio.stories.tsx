import React from 'react'
import { CustomRadio, Paper, RadioGroup, Text } from '@pillar-ui/core'
import { Meta } from '@storybook/react'

const meta: Meta<typeof CustomRadio> = {
  title: 'Components/CustomRadio',
  component: CustomRadio,
  args: {
    children: 'Choose Your Gender',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

export function CustomRadioBase() {
  return (
    <div>
      <RadioGroup legend="Delivery Method" direction="row" name="delivery">
        <CustomRadio>
          <Paper flow="3">
            <div>
              <Text size="4" weight="5">
                Standard
              </Text>
              <Text color="b" low>
                12-15 business days
              </Text>
            </div>
            <Text weight="7">$ 25.00</Text>
          </Paper>
        </CustomRadio>
        <CustomRadio>
          <Paper flow="3">
            <div>
              <Text size="4" weight="5">
                Express
              </Text>
              <Text color="b" low>
                3-6 business days
              </Text>
            </div>
            <Text weight="7">$ 35.00</Text>
          </Paper>
        </CustomRadio>
        <CustomRadio>
          <Paper flow="3">
            <div>
              <Text size="4" weight="5">
                Super Fast
              </Text>
              <Text color="b" low>
                1-3 business days
              </Text>
            </div>
            <Text weight="7">$ 50.00</Text>
          </Paper>
        </CustomRadio>
      </RadioGroup>
    </div>
  )
}

export function CustomRadioColors() {
  return (
    <div>
      <RadioGroup legend="Choose Your Prefered Color" name="color">
        <CustomRadio color="d">Red</CustomRadio>
        <CustomRadio color="su">Green</CustomRadio>
        <CustomRadio color="w">Orange</CustomRadio>
        <CustomRadio color="p">Primary</CustomRadio>
        <CustomRadio color="b">Background</CustomRadio>
        <CustomRadio color="se">Secondary</CustomRadio>
        <CustomRadio color="i">info</CustomRadio>
      </RadioGroup>
    </div>
  )
}

export function CustomRadioVariants() {
  return (
    <div className="Sf-4">
      <RadioGroup legend="Choose Your Prefered Variant" name="default">
        <CustomRadio color="d" name="red">
          Red
        </CustomRadio>
        <CustomRadio color="su" name="green">
          Green
        </CustomRadio>
        <CustomRadio color="w" name="orange">
          Green
        </CustomRadio>
        <CustomRadio color="p" name="primary">
          Green
        </CustomRadio>
        <CustomRadio color="b" name="b">
          Green
        </CustomRadio>
        <CustomRadio color="se" name="se">
          Green
        </CustomRadio>
      </RadioGroup>
      <RadioGroup legend="Choose Your Prefered Variant" name="outline">
        <CustomRadio variant="outline" color="d">
          Red
        </CustomRadio>
        <CustomRadio variant="outline" color="su">
          Green
        </CustomRadio>
        <CustomRadio variant="outline" color="w">
          Green
        </CustomRadio>
        <CustomRadio variant="outline" color="p">
          Green
        </CustomRadio>
        <CustomRadio variant="outline" color="b">
          Green
        </CustomRadio>
        <CustomRadio variant="outline" color="se">
          Green
        </CustomRadio>
      </RadioGroup>

      <RadioGroup legend="Choose Your Prefered Variant" name="soft">
        <CustomRadio variant="soft" color="d">
          Red
        </CustomRadio>
        <CustomRadio variant="soft" color="su">
          Green
        </CustomRadio>
        <CustomRadio variant="soft" color="w">
          Green
        </CustomRadio>
        <CustomRadio variant="soft" color="p">
          Green
        </CustomRadio>
        <CustomRadio variant="soft" color="b">
          Green
        </CustomRadio>
        <CustomRadio variant="soft" color="se">
          Green
        </CustomRadio>
      </RadioGroup>
      <RadioGroup legend="Choose Your Prefered Variant" name="mixed">
        <CustomRadio variant="mixed" color="d">
          Red
        </CustomRadio>
        <CustomRadio variant="mixed" color="su">
          Green
        </CustomRadio>
        <CustomRadio variant="mixed" color="w">
          Green
        </CustomRadio>
        <CustomRadio variant="mixed" color="p">
          Green
        </CustomRadio>
        <CustomRadio variant="mixed" color="b">
          Green
        </CustomRadio>
        <CustomRadio variant="mixed" color="se">
          Green
        </CustomRadio>
      </RadioGroup>
    </div>
  )
}

export function CustomRadioSizes() {
  return (
    <RadioGroup legend="Choose Your Prefered Color" name="color">
      <CustomRadio size="1">Red</CustomRadio>
      <CustomRadio size="2">Green</CustomRadio>
      <CustomRadio size="3">Green</CustomRadio>
      <CustomRadio size="4">Green</CustomRadio>
      <CustomRadio size="5">Green</CustomRadio>
      <CustomRadio size="6">Green</CustomRadio>
      <CustomRadio size="7">Green</CustomRadio>
      <CustomRadio size="8">Green</CustomRadio>
      <CustomRadio size="9">Green</CustomRadio>
    </RadioGroup>
  )
}

export function CustomRadioDirection() {
  return (
    <RadioGroup legend="Choose Your Prefered Color" name="color">
      <CustomRadio direction="col" size="1">
        Red
      </CustomRadio>
      <CustomRadio direction="col" size="2">
        Green
      </CustomRadio>
    </RadioGroup>
  )
}

export function CustomRadioIndicator() {
  return (
    <RadioGroup legend="Choose Your Prefered Color" name="color" direction="row">
      <CustomRadio indicator={false}>
        <Text weight="6" size="5">
          Red
        </Text>
      </CustomRadio>
      <CustomRadio indicator={false}>
        <Text weight="6" size="5">
          Red
        </Text>
      </CustomRadio>
      <CustomRadio indicator={false}>
        <Text weight="6" size="5">
          Red
        </Text>
      </CustomRadio>
      <CustomRadio indicator={false}>
        <Text weight="6" size="5">
          Red
        </Text>
      </CustomRadio>
    </RadioGroup>
  )
}

export function CustomRadioTest() {
  return (
    <Paper flow="5">
      <RadioGroup direction="row" legend="Choose Your Best option" name="hello">
        <CustomRadio>
          <Text weight="6">Hello world</Text>
          <Text>Hello world my name is hamza</Text>
        </CustomRadio>
        <CustomRadio>
          <Text weight="6">Hello world</Text>
          <Text>Hello world my name is hamza</Text>
        </CustomRadio>
        <CustomRadio>
          <Text weight="6">Hello world</Text>
        </CustomRadio>
        <CustomRadio>
          <Text>Hello world my name is hamza</Text>
        </CustomRadio>
      </RadioGroup>
      <RadioGroup direction="col" legend="Choose Your Best option" name="hello">
        <CustomRadio color="p">
          <Text weight="6">Hello world</Text>
          <Text>Hello world my name is hamza</Text>
        </CustomRadio>
        <CustomRadio color="se">
          <Text weight="6">Hello world</Text>
          <Text>Hello world my name is hamza</Text>
        </CustomRadio>
        <CustomRadio color="su">
          <Text weight="6">Hello world</Text>
        </CustomRadio>
        <CustomRadio color="b">
          <Text>Hello world my name is hamza</Text>
        </CustomRadio>
        <CustomRadio color="w">
          <Text>Hello world my name is hamza</Text>
        </CustomRadio>
        <CustomRadio color="d">
          <Text>Hello world my name is hamza</Text>
        </CustomRadio>
      </RadioGroup>
    </Paper>
  )
}
