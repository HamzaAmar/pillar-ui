import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 3 5 2.9v5l4.2-2.7L21 11l-9.3 5.4L9.3 18 4 21v-5.6l3-1.7V3Z" />
  </svg>
)

export default SvgComponent
