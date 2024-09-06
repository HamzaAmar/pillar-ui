import { Anchor, Home, Link, Minus } from '@pillar-ui/icons'
import { Avatar, Breadcrumb, BreadcrumbItem, Paper } from '@pillar-ui/core'
import React from 'react'

export const BreadcrumbPlayGround = () => {
  return (
    <Paper border p="sm" background="bg-3" corner="sm">
      <Avatar title="Success!" color="dan" />
      <Avatar title="Success!" color="war" />
      <Avatar title="Success!" color="suc" />
      <Avatar title="Success!" color="pri" />
      <Avatar title="Success!" color="bg" />
      <Avatar title="Success!" color="sec" />
    </Paper>
  )
}

export const BreadcrumbSizes = () => {
  return (
    <Paper border p="sm" background="bg-3" corner="sm">
      <Breadcrumb size="2xs" separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="xs" separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="sm" separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="md" separator="/">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="lg">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="xl">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="2xl">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </Paper>
  )
}

export const BreadcrumbSeparator = () => {
  return (
    <Paper border p="sm" background="bg-3" corner="sm">
      <Breadcrumb separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb separator="*">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb separator={<Minus width={10} />}>
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </Paper>
  )
}
export const BreadcrumbIcons = () => {
  return (
    <Paper border p="sm" background="bg-3" corner="sm">
      <Breadcrumb>
        <BreadcrumbItem link="../../..">
          Home
          <Home width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../..">
          components
          <Anchor width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../">
          base-ui
          <Home width={16} />
        </BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
          <Link width={16} />
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem link="../../..">
          <Home width={16} />
          Home
        </BreadcrumbItem>

        <BreadcrumbItem link="../..">
          <Anchor width={16} />
          components
        </BreadcrumbItem>

        <BreadcrumbItem link="../">
          <Home width={16} />
          base-ui
        </BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          <Link width={16} />
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem link="../../..">
          <span className="u_visually-hidden">Home</span>
          <Home width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../..">
          components
          <Anchor width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../">
          base-ui
          <Home width={16} />
        </BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
          <Link width={16} />
        </BreadcrumbItem>
      </Breadcrumb>
    </Paper>
  )
}

export const BreadcrumbColors = () => {
  return (
    <Paper border p="sm" background="bg-3" corner="sm">
      <Breadcrumb color="dan">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="war">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="suc">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="sec">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="pri">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="bg">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </Paper>
  )
}

BreadcrumbPlayGround.Colors = BreadcrumbColors
BreadcrumbPlayGround.Sizes = BreadcrumbSizes
BreadcrumbPlayGround.Separator = BreadcrumbSeparator
BreadcrumbPlayGround.Icons = BreadcrumbIcons
