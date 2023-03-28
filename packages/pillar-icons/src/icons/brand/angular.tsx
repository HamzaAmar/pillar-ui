import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m9 15 3-8 3 8m-5-2h4m-8.6 4.2 6.1 3.5a1 1 0 0 0 1 0l6-3.5a1 1 0 0 0 .6-.7l1.3-9.7a1 1 0 0 0-.7-1L12.3 3a1 1 0 0 0-.6 0L4.3 5.7a1 1 0 0 0-.7 1.1L5 16.5a1 1 0 0 0 .5.7Z" />
  </svg>
)

export default SvgComponent
