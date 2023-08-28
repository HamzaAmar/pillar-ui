import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const jacket = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m16 3-4 5m4-5H8m8 0a2 2 0 0 1 2 2v2.2c0 .5.2 1 .6 1.4l.8.8c.4.4.6.9.6 1.4V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m0-11L8 3m4 5v11M8 3a2 2 0 0 0-2 2v2.2c0 .5-.2 1-.6 1.4l-.8.8a2 2 0 0 0-.6 1.4V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2m8-6h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3M4 17h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4" />
  </svg>
)

export default jacket
