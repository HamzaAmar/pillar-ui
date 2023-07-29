import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const dental = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9.2 20.5a4 4 0 1 0-5.7-5.7M14.8 3.5a4 4 0 1 0 5.7 5.7m-5.7 5.6a4 4 0 1 0-5.5-5.7 4 4 0 0 0 5.5 5.7Z"
    />
  </svg>
)

export default dental
