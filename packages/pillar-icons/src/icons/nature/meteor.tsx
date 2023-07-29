import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const meteor = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m21 3-5 9h5l-6.9 7a6.5 6.5 0 1 1-8.8-9.4L13 3l-1 5 9-5Z" />
    <path d="M7 14.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
  </svg>
)
export default meteor
