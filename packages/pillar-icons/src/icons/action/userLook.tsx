import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const userLook = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M1.3 19.3v-2a4 4 0 0 1 4-4h1m7.5 4.5 2.5 2.5m-5-15a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
  </svg>
)

export default userLook
