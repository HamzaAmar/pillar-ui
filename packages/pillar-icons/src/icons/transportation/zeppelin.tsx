import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const zeppelin = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 15.5V20h6v-4M13.5 4c4.7 0 8.5 2.7 8.5 6s-3.8 6-8.5 6c-2.1 0-4.6-1-7.4-2.8L4 15v-3.3A46 46 0 0 1 2 10a46 46 0 0 1 2-1.7V5l2.1 1.8C9 4.9 11.4 4 13.5 4Z" />
  </svg>
)

export default zeppelin
