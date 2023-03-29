import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const filterOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3 18 18M9 5h9.5a1 1 0 0 1 .5 1.5L15 11m-1 3v5l-4-3v-4L5 6.5a1 1 0 0 1 .2-1.3" />
  </svg>
)

export default filterOff
