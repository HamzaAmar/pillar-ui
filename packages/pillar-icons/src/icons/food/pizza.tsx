import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const pizza = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5.4 15.9a15 15 0 0 0 13.3.1M13 11v0m-2 3v0m1 7.5c-3 0-6-.7-8.5-2L12 3l8.5 16.5a19 19 0 0 1-8.5 2Z" />
  </svg>
)

export default pizza
