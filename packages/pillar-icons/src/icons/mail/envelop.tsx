import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const envelop = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M21 7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7m18 0-9 6-9-6" />
  </svg>
)

export default envelop
