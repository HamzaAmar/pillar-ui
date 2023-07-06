import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const stripe = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11.5 8c0-.6.5-1 1.4-1 1.7 0 3.4.4 4.6 1l.5-4c-1-.4-2.8-1-5.5-1C10.6 3 9.1 3 8 4 6.8 5 6 6.3 6 8c0 3 2 5 5 6 2 .7 3 .7 3 1.5 0 .7-.9 1.5-2 1.5-1.4 0-4-.6-5.5-1.5l-.5 4c1.3.7 3.5 1.5 6 1.5 2 0 4-.5 5-1.4 1.3-1 2-2.2 2-4.1 0-3.1-2-4.5-5-5.6-1.6-.6-2.5-1.1-2.5-1.8Z" />
  </svg>
)

export default stripe
