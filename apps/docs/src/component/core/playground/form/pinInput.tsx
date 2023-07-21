import React from 'react'
import { Flex, PinInput, Paper } from '@pillar-ui/core'

export const PinInputPlayGround = () => {
  return <div>hello</div>
}

const FilledPinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput autoFocus variant="filled" />
      <PinInput disabled variant="filled" />
      <PinInput readOnly variant="filled" />
      <PinInput isInvalid variant="filled" />
    </Paper>
  )
}

const OutlinePinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput autoFocus variant="outline" />
      <PinInput disabled variant="outline" />
      <PinInput readOnly variant="outline" />
      <PinInput isInvalid variant="outline" />
    </Paper>
  )
}

const BorderedPinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput autoFocus variant="bordered" />
      <PinInput disabled variant="bordered" />
      <PinInput readOnly variant="bordered" />
      <PinInput isInvalid variant="bordered" />
    </Paper>
  )
}

const CornerPinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput corner="sharp" />
      <PinInput corner="xs" />
      <PinInput corner="sm" />
      <PinInput corner="md" />
      <PinInput corner="lg" />
      <PinInput corner="xl" />
      <PinInput corner="full" />
    </Paper>
  )
}

const ColorPinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput color="primary" />
      <PinInput color="warning" />
      <PinInput color="secondary" />
      <PinInput color="surface" />
    </Paper>
  )
}

export const SizePinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput size="xs" />
      <PinInput size="sm" />
      <PinInput size="md" />
      <PinInput size="lg" />
      <PinInput size="xl" />
    </Paper>
  )
}

export const PlaceholderPinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput length={10} />
      <PinInput placeholder="◊" />
      <PinInput placeholder="◉" />
      <PinInput placeholder="●" />
      <PinInput placeholder="◯" />
      <PinInput placeholder="◵" />
      <PinInput placeholder="◬" />
    </Paper>
  )
}

export const LengthPinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput />
      <PinInput length={5} />
      <PinInput length={6} />
      <PinInput length={7} />
      <PinInput length={8} />
      <PinInput length={10} />
    </Paper>
  )
}

export const TypePinInput = () => {
  return (
    <Paper flow="sm" className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <PinInput type="number" />
      <PinInput type="text" />
      <PinInput type="password" />
    </Paper>
  )
}

PinInputPlayGround.Filled = FilledPinInput
PinInputPlayGround.Outline = OutlinePinInput
PinInputPlayGround.Bordered = BorderedPinInput
PinInputPlayGround.Corners = CornerPinInput
PinInputPlayGround.Colors = ColorPinInput
PinInputPlayGround.Sizes = SizePinInput
PinInputPlayGround.Type = TypePinInput
PinInputPlayGround.Placeholder = PlaceholderPinInput
PinInputPlayGround.Length = LengthPinInput
