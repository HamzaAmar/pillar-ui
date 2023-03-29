import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const medicalMinus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 10h6m8 11-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
)

export default medicalMinus
