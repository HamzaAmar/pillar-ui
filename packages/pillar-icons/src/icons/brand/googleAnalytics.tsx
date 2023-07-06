import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const googleAnalytics = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12.9 9H11c-.6 0-1.1.5-1.1 1.1V20c0 .6.5 1.1 1.1 1.1h2c.6 0 1.1-.5 1.1-1.1V10c0-.6-.5-1.1-1.1-1.1Zm7-6H18c-.6 0-1.1.5-1.1 1.1V20c0 .6.5 1.1 1.1 1.1h2c.6 0 1.1-.5 1.1-1.1V4c0-.6-.5-1.1-1.1-1.1ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
)

export default googleAnalytics
