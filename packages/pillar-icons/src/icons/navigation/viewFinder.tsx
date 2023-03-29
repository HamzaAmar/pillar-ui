import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const viewFinder = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m16 5 3 3-2 1 4 4-3 1 4 4h-9m2 3v-3m-7-5-2-2m2 1 2-2M8 21V8m-2.2 8a3 3 0 0 1-2.7-3.7 3 3 0 0 1 .3-4.8A3 3 0 0 1 8 3.8a3 3 0 0 1 4.6 3.7 3 3 0 0 1 .3 4.8A3 3 0 0 1 10 16h0-4.2Z" />
  </svg>
)

export default viewFinder
