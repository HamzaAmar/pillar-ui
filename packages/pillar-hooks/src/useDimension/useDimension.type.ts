interface BoxSize {
  top: number
  right: number
  bottom: number
  left: number
}

export interface ElementSize {
  width: number
  height: number
  padding: BoxSize
  margin: BoxSize
  border: BoxSize
  content: BoxSize
}
