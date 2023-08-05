import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const toiletPaper = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 10a13 13 0 0 1-.9 5c-.5 1.3-1.3 2-2.1 2s-1.6-.7-2.1-2a13 13 0 0 1-.9-5c0-1.9.3-3.6.9-5C4.4 3.8 5.2 3 6 3m3 7a13 13 0 0 0-.9-5C7.6 3.8 6.8 3 6 3m3 7v10l3-2 3 3 3-2 3 1V10c0-3.9-1.3-7-3-7H6m0 7h0" />
  </svg>
)

export default toiletPaper
