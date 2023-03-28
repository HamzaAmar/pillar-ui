import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const twitch = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 8v4m-4-4v4M4 5v11a1 1 0 0 0 1 1h2v4l4-4h5.6c.3 0 .5-.1.7-.3l2.4-2.4c.2-.2.3-.4.3-.7V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1Z" />
  </svg>
)

export default twitch
