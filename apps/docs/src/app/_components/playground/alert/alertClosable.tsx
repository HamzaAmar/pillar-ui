import { Alert } from '@pillar-ui/core'

export const AlertClosable = () => {
  return (
    <>
      <Alert closable title="Success!" />
      <Alert closable title="Success!" message="you have an error in the start of the program" />
      <Alert closable message="you have an error in the start of the program!" />
    </>
  )
}
