import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const firstAidKit = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 6h4m-2-2v4m-8-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
  </svg>
)

export default firstAidKit
