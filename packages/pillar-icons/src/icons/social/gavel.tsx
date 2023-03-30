import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const gavel = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m13 10 7.4 7.4a2 2 0 0 1-1.5 3.6c-.6 0-1.1-.2-1.5-.6L10 13m3-3L9 6m4 4 .5.5 2.3-2.3a1 1 0 0 0 0-1.4l-3.6-3.6a1 1 0 0 0-1.4 0L8.5 5.5 9 6m4 4-3 3m0 0L6 9m4 4 .5.5-2.3 2.3a1 1 0 0 1-1.4 0l-3.6-3.6a1 1 0 0 1 0-1.4l2.3-2.3.5.5m0 0 3-3M3 21h7" />
  </svg>
)

export default gavel
