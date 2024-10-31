'use client'
import { Alert, Button } from '@pillar-ui/core'

export const AlertAction = () => {
  return (
    <>
      <Alert title="Success!" />
      <Alert closable title="Success!" message="you have an error in the start of the program" />
      <Alert
        action={
          <Button variant="mixed" color="d" size="3">
            Close
          </Button>
        }
        closable
        message="you have an error in the start of the program!"
      />
    </>
  )
}
