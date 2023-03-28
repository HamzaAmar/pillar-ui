import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

interface MessageDotsProps extends SvgType {
  status: 'off' | 'on'
}
const MessageDots = ({ status, ...rest }: MessageDotsProps) => (
  <svg {...svgProps} {...rest}>
    {status === 'off' ? (
      <path d="M12 11v0m-4 0v0m8 0v0M4 21V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8l-4 4Z" />
    ) : (
      <path d="m3 3 18 18M9 5h8a3 3 0 0 1 3 3v6a3 3 0 0 1-.4 1.6M17 17H8l-4 4V8c0-1 .6-2 1.4-2.6L17 17Z" />
    )}
  </svg>
)

export default MessageDots
