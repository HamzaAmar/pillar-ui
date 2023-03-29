import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const cloudUpload = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 18c-1.2 0-2.4-.5-3.3-1.3-1-.9-1.4-2-1.4-3.2 0-1.2.5-2.3 1.4-3.2C4.6 9.5 5.7 9 7 9a5 5 0 0 1 2.4-3.2 6 6 0 0 1 4.2-.8 6 6 0 0 1 2 .8c.6.4 1.2.9 1.6 1.4.4.6.7 1.2.8 1.8v2h1a3.5 3.5 0 1 1 0 7h-1m-9-3 3-3m0 0 3 3m-3-3v9" />
  </svg>
)

export default cloudUpload
