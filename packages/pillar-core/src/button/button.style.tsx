import { styled } from '../../stitches.config'

export const StyledButton = styled('button', {
  all: 'unset',
  backgroundColor: '$red8',
  borderRadius: '9999px',
  fontSize: '15px',
  padding: '10px 15px',
  color: 'white',
  cursor: 'pointer',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '$red10',
  },
})
