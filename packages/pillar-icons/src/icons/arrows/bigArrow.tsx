import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const BigArrowTop = (props: SvgType) => (
  <Svg {...props}>
    <path
      d="M9 20v-8H5.4a1 1 0 0 1-.7-1.7l6.6-6.6a1 1 0 0 1 1.4 0l6.6 6.6a1 1 0 0 1-.7 1.7H15v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z
"
    />
  </Svg>
)
export const BigArrowDown = ({ o, ...rest }: SvgType) => <BigArrowTop o="b" {...rest} />
export const BigArrowLeft = ({ o, ...rest }: SvgType) => <BigArrowTop o="l" {...rest} />
export const BigArrowRight = ({ o, ...rest }: SvgType) => <BigArrowTop o="r" {...rest} />
