import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const candle = (props: SvgType) => (
  <Svg {...props}>
    <path d="M6 4v2m0 5v9m6-16v10m0 5v1m6-16v1m0 6v9M5 6h2c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1V7c0-.6.4-1 1-1Zm6 8h2c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-2a1 1 0 0 1-1-1v-3c0-.6.4-1 1-1Zm6-9h2c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1h-2a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z" />
  </Svg>
)

export default candle
