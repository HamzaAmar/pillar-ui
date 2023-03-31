import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const eyeOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m2.3 1.6 18 18M10 9.2a2 2 0 0 0 2.9 2.8M8.7 4c.9-.3 1.7-.4 2.6-.4 4 0 7.4 2.3 10 7a19 19 0 0 1-2.5 3.5m-2.1 1.8a9.4 9.4 0 0 1-5.4 1.7c-4 0-7.3-2.3-10-7 1.4-2.4 3-4.2 4.7-5.4" />
  </svg>
)

export default eyeOff
