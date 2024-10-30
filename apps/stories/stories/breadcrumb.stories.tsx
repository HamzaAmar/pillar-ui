import React from 'react'
import { Meta } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'
import { Home, Link, Minus, Anchor } from '@pillar-ui/icons'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
}
export default meta
export function BreadcrumbDefault() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="../..">components</BreadcrumbItem>
      <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
      <BreadcrumbItem href="./" current>
        breadcrumb
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export function BreadcrumbSeparator() {
  return (
    <div className="Sf-4">
      <Breadcrumb separator="-">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb separator="*">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb separator={<Minus width={10} />}>
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbColor() {
  return (
    <div className="Sf-4">
      <Breadcrumb color="d">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="w">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="su">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="se">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="p">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="b">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbIcons() {
  return (
    <div className="Sf-4">
      <Breadcrumb>
        <BreadcrumbItem href="../../..">
          Home
          <Home width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem href="../..">
          components
          <Anchor width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem href="../">
          base-ui
          <Home width={16} />
        </BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
          <Link width={16} />
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem href="../../..">
          <Home width={16} />
          Home
        </BreadcrumbItem>

        <BreadcrumbItem href="../..">
          <Anchor width={16} />
          components
        </BreadcrumbItem>

        <BreadcrumbItem href="../">
          <Home width={16} />
          base-ui
        </BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          <Link width={16} />
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem href="../../..">
          <span className="H-sr">Home</span>
          <Home width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem href="../..">
          components
          <Anchor width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem href="../">
          base-ui
          <Home width={16} />
        </BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
          <Link width={16} />
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbSize() {
  return (
    <div className="Sf-4">
      <Breadcrumb size="2" separator="-">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="3" separator="-">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb size="4" separator="-">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator="-">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb size="5" separator="/">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb size="6">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="7">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb size="8">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbCustomStyle() {
  return (
    <div className="Sf-4">
      <Breadcrumb className="Cd" separator="-">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb style={{ color: 'brown', background: 'var(--B5)' }} separator="*">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb separator={<Minus width={10} />}>
        <BreadcrumbItem style={{ color: 'red', background: 'white' }} href="../..">
          components
        </BreadcrumbItem>
        <BreadcrumbItem style={{ color: 'red', background: 'white' }} href="../">
          base-ui
        </BreadcrumbItem>
        <BreadcrumbItem style={{ color: 'red', background: 'white' }} href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbPolymorphic() {
  return (
    <div className="Sf-4">
      <Breadcrumb as="div" separator="-">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb as="span" separator="*">
        <BreadcrumbItem href="../..">components</BreadcrumbItem>
        <BreadcrumbItem href="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem href="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb as="article" separator={<Minus width={10} />}>
        <BreadcrumbItem as="button" onClick={() => alert('hello')}>
          components
        </BreadcrumbItem>
        <BreadcrumbItem as="button" onClick={() => alert('hello')}>
          base-ui
        </BreadcrumbItem>
        <BreadcrumbItem as="button" onClick={() => alert('hello')} current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}
