import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const flickr = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
)

export default flickr
