import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const intercom = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 8v3m3-4v6m4-6v6m3-5v3M7 15c4 2.7 6 2.7 10 0M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z" />
  </svg>
)

export default intercom
