import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 15a8.5 8.5 0 0 1-8 0m11-6.3-5.3-4.1a2.7 2.7 0 0 0-3.3 0L5 8.7a2.7 2.7 0 0 0-1 2.1V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.2c0-.8-.5-1.6-1.1-2Z" />
  </svg>
)

export default SvgComponent
