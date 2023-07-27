import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const versions = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 7v10M4 8v8m6-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V7Z" />
  </svg>
)

export default versions
