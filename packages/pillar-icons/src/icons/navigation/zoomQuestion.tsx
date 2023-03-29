import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const medicalQuestion = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m21 21-6-6m-5-2v0m0-3a1.5 1.5 0 1 0-1.1-2.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
)

export default medicalQuestion
