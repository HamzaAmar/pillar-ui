import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const virusOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 3.5 18 18m-4-8a5 5 0 0 0-6-6m1 0v-4m-1 0h2M15.5 9 18.4 6m-.7-.7L19 6.8M17 12.5h4m0-1v2m-2.6 5.4-.7.7M12 17.5v4m1 0h-2M8.5 16 5.6 19m.7.7L5 18.2M7 12.5H3m0 1v-2m2.6-5.4-.7.7M8.5 9a5 5 0 0 0 7 7l-7-7Z" />
  </svg>
)

export default virusOff
