import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const shoe = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m14 13.5 1-2m-7 7v-1a4 4 0 0 0-4-4H3m7-1 1.5-3M4 6.5h5.4a1 1 0 0 1 .9.5l1 1.8a3 3 0 0 0 2 1.4l4.6 1.1a4 4 0 0 1 3.1 4v2.2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z" />
  </svg>
)

export default shoe
