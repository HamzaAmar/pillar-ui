import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6 20 6-10-3-5M6 20l-3-5L9 5M6 20h12l3-5M9 5l6 10h6M9 5h6l6 10M9 15h12" />
  </svg>
)

export default SvgComponent
