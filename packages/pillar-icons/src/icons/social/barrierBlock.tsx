import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const barrierBlock = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 16v4m.5-4 9-9m-3 9L20 9.5m-16 4L10.5 7m6.5 9v4M5 20h4m6 0h4M17 7V5M7 7V5M5 7h14c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V8c0-.6.4-1 1-1Z" />
  </svg>
)

export default barrierBlock
