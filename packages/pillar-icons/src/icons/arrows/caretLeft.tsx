import { SvgType } from '../../type'
import CaretDown from './caretDown'

const CaretLeft = ({ direction, ...rest }: SvgType) => <CaretDown direction="left" {...rest} />

export default CaretLeft
