import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const moon = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 11h2m-1-1v2m-8-9h.4a7.5 7.5 0 0 0 8 12.4A9 9 0 1 1 12 3v0Zm5 1a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2Z" />
  </svg>
)

export default moon
