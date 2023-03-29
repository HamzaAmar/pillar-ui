import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const scooterElectric = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1m-5-1L8 8h3l-2 4m11 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default scooterElectric
