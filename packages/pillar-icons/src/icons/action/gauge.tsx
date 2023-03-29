import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const filterOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M13.4 10.6 16 8m-9 4a5 5 0 0 1 5-5m9 5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default filterOff
