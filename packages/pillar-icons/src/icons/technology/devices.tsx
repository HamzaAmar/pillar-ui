import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tv = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9m3-9h2m-4-1h6c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1h-6a1 1 0 0 1-1-1V9c0-.6.4-1 1-1Z" />
  </svg>
)

export default tv
