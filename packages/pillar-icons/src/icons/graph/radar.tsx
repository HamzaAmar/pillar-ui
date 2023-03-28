import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Pie = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m12 3 9.5 7M12 3l-9.5 7M12 3v10m9.5-3L18 21m3.5-11L12 13m6 8H6m12 0-6-8m-6 8L2.5 10M6 21l6-8m-9.5-3 9.5 3m0-5.5 5.5 4L15 17H8.5l-2-5.5 5.5-4Z" />
  </svg>
)

export default Pie
