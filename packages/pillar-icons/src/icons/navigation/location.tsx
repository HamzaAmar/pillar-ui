import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const location = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m21 3-6.5 18a.6.6 0 0 1-1 0L10 14l-7-3.5a.6.6 0 0 1 0-1L21 3Z" />
  </svg>
)

export default location
