import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const filter = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5L14 12v7l-4-3v-4L5 6.5A1 1 0 0 1 5.5 5Z" />
  </svg>
)

export default filter
