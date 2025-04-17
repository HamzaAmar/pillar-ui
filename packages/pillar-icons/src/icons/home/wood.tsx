import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const wood = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 5.5c0 .7.6 1.3 1.8 1.8 1 .4 2.6.7 4.2.7s3.1-.3 4.2-.7c1.2-.5 1.8-1.1 1.8-1.8m-12 0c0-.7.6-1.3 1.8-1.8 1-.4 2.6-.7 4.2-.7s3.1.3 4.2.7c1.2.5 1.8 1.1 1.8 1.8m-12 0v6.6a1.4 1.4 0 0 0-1.6 2.3L6 16v2c0 1.7 2.7 3 6 3h.3c3.2 0 5.7-1.4 5.7-3v-4l1.6-1.6h0A1.4 1.4 0 0 0 18 10V5.5m-8 7V14m4 2v1" />
  </Svg>
)

export default wood
