import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const safari = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m8 16 2-6 6-2-2 6-6 2Z" />
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
  </svg>
)

export default safari
