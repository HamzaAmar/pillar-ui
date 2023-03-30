import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const scubaMask = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5-5.5V4M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1-2.5 2.5H14a2 2 0 0 1-2-2 2 2 0 0 0-4 0 2 2 0 0 1-2 2h-.5A2.5 2.5 0 0 1 3 12.5V8a1 1 0 0 1 1-1Z" />
  </svg>
)

export default scubaMask
