import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const mailbox = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 22v-6.5A3.5 3.5 0 0 0 6.5 12m0 0A3.5 3.5 0 0 0 3 15.5V22h18v-6a4 4 0 0 0-4-4H6.5Zm5.5 0V4h4l2 2-2 2h-4m-6 8h1" />
  </svg>
)

export default mailbox
