import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const virus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17.5 12a5 5 0 0 1-5 5m5-5a5 5 0 0 0-5-5m5 5h4m-9 5a5 5 0 0 1-5-5m5 5v4m-5-9a5 5 0 0 1 5-5m-5 5h-4m9-5V3m-1 0h2M16 8.5 19 5.6m-.7-.7 1.4 1.4m1.9 4.7v2M16 15.5l2.9 2.9m.7-.7L18.2 19M13.5 21h-2M9 15.5 6 18.4m.7.7-1.4-1.4M3.5 13v-2M9 8.5 6 5.6m-.7.7L6.8 5" />
  </svg>
)

export default virus
