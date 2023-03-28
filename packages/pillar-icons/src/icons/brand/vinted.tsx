import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 6c0 7.7-.3 11.7 0 12 2-5 4.3-12.6 5.3-14.1.3-.5.7-1 1.2-1.3.6-.4 1.3-.7 1.5-.6 0 2.4-4 15.9-4.2 16.4a6.1 6.1 0 0 1-3.5 3.3c-3.2.8-3.4-.4-3.8-1C6.5 18.4 5.8 6.3 6 5c.1-.5.2-1.9 2.5-2 2.4-.4 2.6 1.4 2.5 3Z" />
  </svg>
)

export default SvgComponent
