import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const volleyball = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 12a8 8 0 0 0 8 4m-8-4a8 8 0 0 0-7.5 5m7.5-5a8 8 0 0 0-.5-9m-4 10.5A12 12 0 0 0 16 20M13 7.4a12 12 0 0 0-10 4m12.5 3.7A12 12 0 0 0 17 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

export default volleyball
