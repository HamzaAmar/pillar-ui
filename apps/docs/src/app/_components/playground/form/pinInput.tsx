import React from 'react'
import { PinInput, Paper } from '~/component/core/pillar'

export const PinInputFilled = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <PinInput autoFocus variant="filled" />
      <PinInput disabled variant="filled" />
      <PinInput readOnly variant="filled" />
    </Paper>
  )
}

export const PinInputOutline = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <PinInput autoFocus variant="outline" />
      <PinInput disabled variant="outline" />
      <PinInput readOnly variant="outline" />
    </Paper>
  )
}

export const PinInputBordered = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <PinInput autoFocus variant="bordered" />
      <PinInput disabled variant="bordered" />
      <PinInput readOnly variant="bordered" />
    </Paper>
  )
}

export const PinInputCorners = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
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

export const PinInputColors = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <PinInput color="pri" />
      <PinInput color="war" />
      <PinInput color="sec" />
      <PinInput color="bg" />
    </Paper>
  )
}

export const PinInputSizes = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <PinInput size="xs" />
      <PinInput size="sm" />
      <PinInput size="md" />
      <PinInput size="lg" />
      <PinInput size="xl" />
    </Paper>
  )
}

export const PinInputPlaceholder = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
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

export const PinInputLength = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <PinInput />
      <PinInput length={5} />
      <PinInput length={6} />
      <PinInput length={7} />
      <PinInput length={8} />
      <PinInput length={10} />
    </Paper>
  )
}

export const PinInputType = () => {
  return (
    <Paper flow="sm" className="playground" border p="sm" background="bg-3" corner="sm">
      <PinInput type="number" />
      <PinInput type="text" />
      <PinInput type="password" />
    </Paper>
  )
}
