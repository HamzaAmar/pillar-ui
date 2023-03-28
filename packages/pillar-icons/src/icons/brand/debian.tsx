import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 17c-2.4-1-4-3.2-4-5.6 0-2.2 1-3.2 1.6-3.6C12.3 5.6 16 7.5 16 11c0 2.5-2.9 2.1-3.5 1.5-.6-.6-1-1.5-.5-2.5m9 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default SvgComponent
