import React from 'react'
import { Meta } from '@storybook/react'
import { Flex, Tabs, Tab, TabList, TabPanel, Grid } from '@pillar-ui/core'
import { Home } from '@pillar-ui/icons'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>

export default meta

function TabBase(props) {
  return (
    <Tabs {...props}>
      <TabList>
        <Tab value={1} title="Hello World" icon={<Home />} />
        <Tab value={2} title="Hello World" icon={<Home />} />
        <Tab value={3} title="Hello World" icon={<Home />} />
      </TabList>
      <TabPanel value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 1.</TabPanel>
      <TabPanel value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 2.</TabPanel>
      <TabPanel value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 3.</TabPanel>
    </Tabs>
  )
}

export const TabOutline = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase variant="outline" color="w" />
      <TabBase variant="outline" orientation="horizontal" color="su" />
    </Flex>
  )
}

export const TabSolid = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase variant="solid" color="w" />
      <TabBase variant="solid" orientation="horizontal" color="su" />
    </Flex>
  )
}
export const TabBorder = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase color="w" />
      <TabBase orientation="horizontal" color="su" />
    </Flex>
  )
}

export const TabGroup = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase variant="group" color="w" />
      <TabBase variant="group" orientation="horizontal" color="su" />
      <Tabs variant="group">
        <TabPanel value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 1.</TabPanel>
        <TabPanel value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 2.</TabPanel>
        <TabPanel value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 3.</TabPanel>
        <TabList>
          <Tab value={1} title="Hello World" icon={<Home />} />
          <Tab value={2} title="Hello World" icon={<Home />} />
          <Tab value={3} title="Hello World" icon={<Home />} />
        </TabList>
      </Tabs>
    </Flex>
  )
}
export const TabSize = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase size="2" defaultValue={1} />
      <TabBase size="4" defaultValue={1} />
      <TabBase size="5" defaultValue={1} />
      <TabBase size="6" defaultValue={1} />
      <TabBase size="7" defaultValue={1} />
      <TabBase size="8" defaultValue={1} />
    </Flex>
  )
}

export const TabColor = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase color="d" defaultValue={1} />
      <TabBase color="w" defaultValue={1} />
      <TabBase color="su" defaultValue={1} />
      <TabBase color="p" defaultValue={1} />
      <TabBase color="se" defaultValue={1} />
      <TabBase color="b" defaultValue={1} />
    </Flex>
  )
}

export const TabHorizontal = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase variant="solid" orientation="horizontal" />
      <TabBase variant="outline" orientation="horizontal" />
      <TabBase variant="soft" orientation="horizontal" />
      <TabBase variant="group" orientation="horizontal" />
      <TabBase variant="border" orientation="horizontal" />
    </Flex>
  )
}

export const TabVertical = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase variant="solid" />
      <TabBase variant="outline" />
      <TabBase variant="soft" />
      <TabBase variant="group" />
      <TabBase variant="border" />
    </Flex>
  )
}

export const TabCorner = () => {
  return (
    <Flex direction="col" gap="4">
      <Tabs variant="solid">
        <TabList corner="3">
          <Tab value={1} title="Hello World" icon={<Home />} />
          <Tab value={2} title="Hello World" icon={<Home />} />
          <Tab value={3} title="Hello World" icon={<Home />} />
        </TabList>
        <TabPanel value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 1.</TabPanel>
        <TabPanel value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 2.</TabPanel>
        <TabPanel value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 3.</TabPanel>
      </Tabs>
      <Tabs variant="border">
        <TabList corner="3">
          <Tab value={1} title="Hello World" icon={<Home />} />
          <Tab value={2} title="Hello World" icon={<Home />} />
          <Tab value={3} title="Hello World" icon={<Home />} />
        </TabList>
        <TabPanel value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 1.</TabPanel>
        <TabPanel value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 2.</TabPanel>
        <TabPanel value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 3.</TabPanel>
      </Tabs>
      <Tabs variant="group">
        <TabList corner="full">
          <Tab value={1} title="Hello World" icon={<Home />} />
          <Tab value={2} title="Hello World" icon={<Home />} />
          <Tab value={3} title="Hello World" icon={<Home />} />
        </TabList>
        <TabPanel value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 1.</TabPanel>
        <TabPanel value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 2.</TabPanel>
        <TabPanel value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 3.</TabPanel>
      </Tabs>
      <Tabs variant="soft">
        <TabList corner="5">
          <Tab value={1} title="Hello World" icon={<Home />} />
          <Tab value={2} title="Hello World" icon={<Home />} />
          <Tab value={3} title="Hello World" icon={<Home />} />
        </TabList>
        <TabPanel value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 1.</TabPanel>
        <TabPanel value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 2.</TabPanel>
        <TabPanel value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit 3.</TabPanel>
      </Tabs>
    </Flex>
  )
}

export const TabVariants = () => {
  return (
    <Flex direction="col" gap="4">
      <TabBase variant="outline" color="w" defaultValue={1} />
      <TabBase variant="soft" color="su" defaultValue={1} />
      <TabBase variant="solid" color="d" defaultValue={1} />
      <TabBase color="p" defaultValue={1} />
      <TabBase variant="group" color="p" defaultValue={1} />
    </Flex>
  )
}
