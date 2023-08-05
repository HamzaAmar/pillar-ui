import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const key = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 9h0m1.6-5.2 3.6 3.6a2.9 2.9 0 0 1 0 4.1l-2.7 2.7a2.9 2.9 0 0 1-4 0l-.4-.3-6.5 6.5a2 2 0 0 1-1.3.6H4a1 1 0 0 1-1-.9v-1.3c0-.4.2-.9.5-1.3h0L4 17h2v-2h2v-2l2.1-2.1-.3-.3a2.9 2.9 0 0 1 0-4.1l2.7-2.7a2.9 2.9 0 0 1 4 0Z" />
  </svg>
)

export default key
