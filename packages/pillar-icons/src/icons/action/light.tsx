import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const light = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M1.5 10.2h1m8-9v1m8 8h1M4.1 3.8l.7.7M17 3.8l-.7.7m-8 10.7h4.6m-5.3-1a5 5 0 1 1 6 0 3.5 3.5 0 0 0-1 3 2 2 0 1 1-4 0 3.5 3.5 0 0 0-1-3Z" />
  </svg>
)

export default light
