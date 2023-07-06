import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const discord = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7.5 7.5c3.5-1 5.5-1 9 0m-9.5 9c3.5 1 6.5 1 10 0m-1.5.5c0 1 1.5 3 2 3 1.5 0 2.8-1.7 3.5-3 .7-1.7.5-5.8-1.5-11.5-1.5-1-3-1.3-4.5-1.5l-1 2.5M8.5 17c0 1-1.4 3-1.8 3-1.5 0-2.7-1.7-3.4-3-.6-1.7-.4-5.8 1.5-11.5C6.2 4.5 7.5 4.2 9 4l1 2.5m0 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default discord
