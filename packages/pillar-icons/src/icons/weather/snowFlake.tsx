import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const moon = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 2v6.5l3 1.7M20.7 7 15 10.3v3.4m5.7 3.3L15 13.8l-3 1.7m0 6.5v-6.5l-3-1.7M3.3 17 9 13.7v-3.4M3.3 7 9 10.2l3-1.7M10 4l2 1 2-1h-4Zm8 2.3v2.2l2 1.2-2-3.4Zm2 8-2 1.2v2.2l2-3.4ZM14 20l-2-1-2 1h4Zm-8-2.3v-2.2l-2-1.2 2 3.4Zm-2-8 2-1.2V6.3L4 9.7Z" />
  </svg>
)

export default moon
