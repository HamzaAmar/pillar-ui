import { SvgType } from '../../type'
import CornerRightArrow from './cornerRightArrow'

const CornerLeftArrow = ({ direction, ...rest }: SvgType) => <CornerRightArrow direction="left" {...rest} />

export default CornerLeftArrow
