import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const hierarchy = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m5 17 2-3m2-4 2-3m2 0 2 3m2 4 2 3m-4-3-2 3m-4-3 2 3M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm-4 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm4 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM2 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm12-7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  </svg>
)

export default hierarchy
