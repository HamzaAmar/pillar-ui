import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const graphql = (props: SvgType) => (
  <Svg {...props}>
    <path d="m5.3 7.3 5.4-3m2.6 0 5.4 3M20 9.5v5m0-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 5a1.5 1.5 0 1 1-1.5 1.5m1.5-1.5a1.5 1.5 0 0 0-1.5 1.5m.2.7-5.4 3m-2.6 0-5.4-3M4 14.5v-5m0 5A1.5 1.5 0 0 1 5.5 16M4 14.5A1.5 1.5 0 1 0 5.5 16M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm8.8-4.7 6 10.2m-.3 1h-13m-.4-1 6.1-10.2m-.7-1.3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm0 17a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
  </Svg>
)

export default graphql
