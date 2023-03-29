import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const carrot = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 21h12a2 2 0 0 0 2-2v-5.8a5 5 0 0 0-.5-2.3l-1-1.8a5 5 0 0 1-.5-2.3V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3m0 13a2 2 0 0 1-2-2v-5.8c0-.8.2-1.6.5-2.3L6 8m0 13a2 2 0 0 0 2-2v-5.8a5 5 0 0 0-.5-2.3L6 8m5-1h2m3 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default carrot
