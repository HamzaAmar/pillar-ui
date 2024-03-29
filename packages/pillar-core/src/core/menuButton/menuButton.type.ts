export interface MenuItem {
  value: string
  label: string
}

export interface MenuSelectProps {
  items: MenuItem[]
  onChange?: (value: string) => void
  label: string
  loop?: boolean
  disabled?: boolean
  instructions?: string
}
