import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const jumpRope = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 14V8a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6M6 14a2 2 0 0 1 2 2v3a2 2 0 1 1-4 0v-3c0-1.1.9-2 2-2Zm12-4a2 2 0 0 0 2-2V5a2 2 0 1 0-4 0v3c0 1.1.9 2 2 2Z" />
  </svg>
)

export default jumpRope
