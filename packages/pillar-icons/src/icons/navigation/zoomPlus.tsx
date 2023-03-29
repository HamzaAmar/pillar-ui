import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const medicalPlus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 10h6m-3-3v6m11 8-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
)

export default medicalPlus
