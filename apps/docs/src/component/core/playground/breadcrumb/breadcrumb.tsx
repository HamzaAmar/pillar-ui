import { Alien, Anchor, Apple, Check, ChevronDown, Home, LetterSpacing, Link, Minus, Plane, Plus } from '@pillar/icons'
import { Avatar, Breadcrumb, Flex, Paper } from '@pillar/core'
import React from 'react'

export const BreadcrumbPlayGround = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm" items="center">
      <Avatar title="Success!" color="danger" />
      <Avatar title="Success!" color="warning" />
      <Avatar title="Success!" color="success" />
      <Avatar title="Success!" color="primary" />
      <Avatar title="Success!" color="surface" />
      <Avatar title="Success!" color="secondary" />
    </Paper>
  )
}

export const BreadcrumbSizes = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Breadcrumb size="2xs" separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb size="xs" separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb size="sm" separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb size="md" separator="/">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb size="lg">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb size="xl">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb size="2xl">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </Paper>
  )
}

export const BreadcrumbSeparator = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Breadcrumb separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb separator="*">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb separator={<Minus width={10} />}>
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </Paper>
  )
}
export const BreadcrumbIcons = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Breadcrumb>
        <Breadcrumb.Item link="../../..">
          Home
          <Home width={16} />
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../..">
          components
          <Anchor width={16} />
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../">
          base-ui
          <Home width={16} />
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
          <Link width={16} />
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb>
        <Breadcrumb.Item link="../../..">
          <Home width={16} />
          Home
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../..">
          <Anchor width={16} />
          components
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../">
          <Home width={16} />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Link width={16} />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb>
        <Breadcrumb.Item link="../../..">
          <span className="u_visually-hidden">Home</span>
          <Home width={16} />
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../..">
          components
          <Anchor width={16} />
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../">
          base-ui
          <Home width={16} />
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
          <Link width={16} />
        </Breadcrumb.Item>
      </Breadcrumb>
    </Paper>
  )
}

export const BreadcrumbColors = () => {
  return (
    <Paper borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Breadcrumb color="danger">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="warning">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="success">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="secondary">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="primary">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="surface">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </Paper>
  )
}

BreadcrumbPlayGround.Colors = BreadcrumbColors
BreadcrumbPlayGround.Sizes = BreadcrumbSizes
BreadcrumbPlayGround.Separator = BreadcrumbSeparator
BreadcrumbPlayGround.Icons = BreadcrumbIcons
