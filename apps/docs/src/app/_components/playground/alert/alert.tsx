import { CircleCheck, CircleWarning } from '@pillar-ui/icons'
import { Alert, Paper } from '~/component/core/pillar'
import React from 'react'

export const AlertPlayGround = () => {
  return (
    <div>
      <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
        <Alert title="Success!" color="danger" />
        <Alert title="Success!" color="warning" />
        <Alert title="Success!" color="success" />
        <Alert title="Success!" color="primary" />
        <Alert title="Success!" color="surface" />
        <Alert title="Success!" color="secondary" />
      </Paper>
    </div>
  )
}
export const AlertColors = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert title="Success!" color="danger" />
      <Alert title="Success!" color="warning" />
      <Alert title="Success!" color="success" />
      <Alert title="Success!" color="primary" />
      <Alert title="Success!" color="surface" />
      <Alert title="Success!" color="secondary" />
    </Paper>
  )
}

export const AlertSizes = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert title="Success!" size="3xs" />
      <Alert title="Success!" size="2xs" />
      <Alert title="Success!" size="xs" />
      <Alert title="Success!" size="md" />
      <Alert title="Success!" size="lg" />
      <Alert title="Success!" size="xl" />
      <Alert title="Success!" size="2xl" />
      <Alert title="Success!" size="3xl" />
    </Paper>
  )
}

export const AlertVariants = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert title="Danger Here" variant="solid" />
      <Alert title="Danger Here" variant="outline" />
      <Alert title="Danger Here" variant="soft" />
      <Alert title="Danger Here" variant="mixed" />
    </Paper>
  )
}

export const AlertCorners = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert title="Success!" corner="sharp" />
      <Alert title="Success!" corner="xs" />
      <Alert title="Success!" corner="md" />
      <Alert title="Success!" corner="lg" />
      <Alert title="Success!" corner="xl" />
      <Alert title="Success!" corner="circle" />
      <Alert title="Success!" corner="full" />
    </Paper>
  )
}

export const AlertContent = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert title="Success!" />
      <Alert icon={<CircleCheck width="30" />} title="Success!" />
      <Alert message="Success!" />
      <Alert title="Success!" message="Your prefered description" />
      <Alert icon={<CircleCheck width="30" />} title="Success!" message="Your prefered description" />
    </Paper>
  )
}

export const AlertIcons = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert icon={<CircleCheck width="32" />} title="Success!" />
      <Alert icon={<CircleCheck width="32" />} title="Success!" />
      <Alert icon={<CircleCheck width="48" />} title="Success!" message="Your prefered description" />
    </Paper>
  )
}

export const AlertClosable = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert closable title="Success!" />
      <Alert closable title="Success!" message="you have an error in the start of the program" />
      <Alert closable message="you have an error in the start of the program!" />
    </Paper>
  )
}

export const AlertInline = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert title="hello" message="you have an error in the start of the program" inline />
      <Alert title="hello" message="you have an error in the start of the program" inline />
      <Alert
        title="hello"
        message="you have an error in the start of the program you have an error in the start of the program you have an error in the start of the program  of the program you have an error in the start of the program"
        inline
      />
      <Alert
        title="hello"
        message="you have an error in the start of the program"
        inline
        icon={<CircleWarning width="20" />}
      />
      <Alert title="hello" message="you have an error in the start of the program" inline closable />
      <Alert
        title="hello"
        message="you have an error in the start of the program"
        inline
        icon={<CircleWarning width="20" />}
        closable
      />
    </Paper>
  )
}

export const AlertCustomStyle = () => {
  return (
    <Paper className="playground" border flow="sm" p="sm" background="surface-3" corner="sm">
      <Alert color="danger" title="hello" className="u_secondary" />
      <Alert color="danger" title="hello" style={{ background: 'success' }} />
    </Paper>
  )
}
