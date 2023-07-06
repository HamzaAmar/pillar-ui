import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const wish = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m2 6 6 2.4-.7 6a3 3 0 0 0 3 3.6 4.3 4.3 0 0 0 4.2-3.6 3 3 0 0 0 3 3.6 4.3 4.3 0 0 0 4.2-3.6l.3-4.6m-7.5 4.6.3-3" />
  </svg>
)

export default wish
