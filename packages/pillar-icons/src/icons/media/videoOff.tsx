import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const videoOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18m-1-5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1l-5 2v1-3a2 2 0 0 0-2-2h-3m5 9v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
  </svg>
)

export default videoOff
