import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const headphonesOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18M4 15v3l2 2h1l2-2v-3l-2-2H6l-2 2Zm0 0v-3l2-6m11 7h1a2 2 0 0 1 2 2m0 0v1m0-1v-3A8 8 0 0 0 9 5m10 14-1 1h-1a2 2 0 0 1-2-2v-3" />
  </svg>
)

export default headphonesOff
