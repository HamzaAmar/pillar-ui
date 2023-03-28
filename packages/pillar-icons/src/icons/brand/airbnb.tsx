import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const Airbnb = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 18.5c-1.5-2-3-4-3-5.5 0-2 1-3 3-3s3 1 3 3c0 1.5-1.5 3.5-3 5.5Zm0 0c1 1 1.5 1.5 2.5 2s2.5 1 4.5-.5 1.5-3.5.5-6-2.3-5.5-5-9.5C13.7 3.5 13 3 12 3s-1.6.5-2.5 1.5c-2.7 4-4 7-5 9.5S3 18.5 5 20s3.5 1 4.5.5 1.5-1 2.5-2Z" />
  </svg>
)

export default Airbnb
