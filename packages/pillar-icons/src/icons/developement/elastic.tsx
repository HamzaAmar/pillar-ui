import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const elastic = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18.5 9a5 5 0 0 0 .5-2 5 5 0 0 0-5-5h0a5 5 0 0 0-4.5 3c-.5-.6-1.2-1-2-1a2.5 2.5 0 0 0-2 4h-.2a3.5 3.5 0 0 0 .1 7m13.1-6c1.9 0 3.5 1.6 3.5 3.5s-1.7 3.4-3.5 3.5c.3.6.5 1.1.5 1.5a2.5 2.5 0 0 1-2.5 2.5c-.8 0-1.5-.4-2-1m4-10-4 4m0 6a5 5 0 0 1-4.5 3 5 5 0 0 1-4.6-7m9.1 4 1-3.5m-10-.5 4-4m-1-2-3-1m3 1 1-4m-1 4 1 2m0 0 5 2m0 0 1 2.5m3 .5-3-.5" />
  </svg>
)

export default elastic
