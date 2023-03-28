import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const handFinger = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 11.5v-1a1.5 1.5 0 1 1 3 0m0 0V12m0-1.5a1.5 1.5 0 1 1 3 0V12 5.5a1.5 1.5 0 1 1 3 0V16a6 6 0 0 1-6 6h-2 .2A6 6 0 0 1 7 19l-3.3-5.7a1.5 1.5 0 0 1 .5-2 1.9 1.9 0 0 1 2.3.2L8 13V4.5a1.5 1.5 0 0 1 3 0V12" />{' '}
  </svg>
)

export default handFinger
