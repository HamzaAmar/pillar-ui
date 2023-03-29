import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const filterOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
)

export default filterOff
