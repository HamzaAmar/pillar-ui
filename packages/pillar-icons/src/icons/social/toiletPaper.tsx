import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const toiletPaper = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17.5 17.5v0m-10 0v0m5-9v0m-2 9A3 3 0 1 1 9 14.9l2-3.8a3 3 0 1 1 3 0l2 3.8a3 3 0 1 1-1.5 2.8v-.2h-4Z" />{' '}
  </svg>
)

export default toiletPaper
