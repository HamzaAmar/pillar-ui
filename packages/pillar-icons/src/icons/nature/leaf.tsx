import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const leaf = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 21c.5-4.5 2.5-8 7-10m-3 7c6.2 0 10.5-3.3 11-12V4h-4C7 4 4 8 4 13c0 1 0 3 2 5h3Z" />
  </svg>
)
export default leaf
