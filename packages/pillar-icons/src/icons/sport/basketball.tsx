import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const basketball = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 12c0 5-4 9-9 9m9-9c0-5-4-9-9-9m9 9a9 9 0 0 1-9-9m0 18c-5 0-9-4-9-9m9 9a9 9 0 0 0-9-9m0 0c0-5 4-9 9-9M5.7 5.6l12.7 12.7m-12.7 0L18.4 5.6" />
  </svg>
)

export default basketball
