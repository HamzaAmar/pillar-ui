import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const filterOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
)

export default filterOff
