import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const id = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 8h2m-2 4h2M7 16h10M6 4h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  </svg>
)

export default id
