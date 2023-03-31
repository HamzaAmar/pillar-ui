import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const boxThree = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 10a2 2 0 1 1 2 2 2 2 0 1 1-2 2M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </svg>
)

export default boxThree
