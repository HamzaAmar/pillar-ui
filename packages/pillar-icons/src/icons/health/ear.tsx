import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const ear = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 10a7 7 0 1 1 13 3.6 10 10 0 0 1-2 2 8 8 0 0 0-2 3A4.5 4.5 0 0 1 8.2 20M10 10a3 3 0 1 1 5 2.2" />
  </svg>
)

export default ear
