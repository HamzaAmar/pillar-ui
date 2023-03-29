import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const coffee = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 14c.8.6 2 1 3.5 1 1.4 0 2.7-.4 3.5-1 .8-.6 2-1 3.5-1 1.4 0 2.7.4 3.5 1M8 3a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m4-4a2.4 2.4 0 0 0-1 2 2.4 2.4 0 0 0 1 2m4.7 9.7a3 3 0 1 0 .3-5.5M3 10h14v5a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6v-5Z" />
  </svg>
)

export default coffee
