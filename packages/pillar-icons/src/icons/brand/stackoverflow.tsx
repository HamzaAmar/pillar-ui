import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const steam = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1M8 16h8m-7.7-3.4 8 .8M8.8 9.2l7.8 1.6m-6.5-5 7.6 2.4" />
  </svg>
)

export default steam
