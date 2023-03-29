import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const ear = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 10a7 7 0 1 1 13 4l-2 2c-1 0-2 1-2 3a4 4 0 0 1-7 1m2-10a3 3 0 1 1 5 2" />
  </svg>
)

export default ear
