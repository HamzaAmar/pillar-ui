import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const search = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m21 21-6-6M3 10a7 7 0 1 0 14 0 7 7 0 0 0-14 0Z" />
  </svg>
)

export default search
