import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Breadcrumb } from '@pillar/core'
import { Home, Link, Minus, Anchor } from '@pillar/icons'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbItem: Breadcrumb.Item },
} as ComponentMeta<typeof Breadcrumb>

export function BreadcrumbDefault() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
      <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
      <Breadcrumb.Item link="./" current>
        breadcrumb
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export function BreadcrumbSeparator() {
  return (
    <div className="l_flow__md">
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
    </div>
  )
}

export function BreadcrumbColor() {
  return (
    <div className="l_flow__md">
      <Breadcrumb color="red">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="orange">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="green">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="violet">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="purple">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="brown">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="indigo">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb color="slate">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbIcons() {
  return (
    <div className="l_flow__md">
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
    </div>
  )
}

export function BreadcrumbSize() {
  return (
    <div className="l_flow__md">
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
    </div>
  )
}

export function BreadcrumbCustomStyle() {
  return (
    <div className="l_flow__md">
      <Breadcrumb className="u_red" separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb style={{ color: 'red', background: 'var(--slate-5)' }} separator="*">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb separator={<Minus width={10} />}>
        <Breadcrumb.Item style={{ color: 'red', background: 'white' }} link="../..">
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ color: 'red', background: 'white' }} link="../">
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ color: 'red', background: 'white' }} link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbPolymorphic() {
  return (
    <div className="l_flow__md">
      <Breadcrumb as="div" separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb as="span" separator="*">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb as="article" separator={<Minus width={10} />}>
        <Breadcrumb.Item as="button" link="../..">
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item as="div" link="../">
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item as="kbd" link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />
export const Playground = Template.bind({})
