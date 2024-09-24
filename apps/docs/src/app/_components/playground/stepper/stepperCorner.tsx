'use client'

import { Button, Flex, Heading, Stepper, StepperProps, StepperStep, Text } from '@pillar-ui/core'
import { useStepper } from '@pillar-ui/hooks'
import { Home, Settings, User } from '@pillar-ui/icons'

const CompleteComponent = () => {
  return <Heading>Hello world</Heading>
}
export const StepperBase = (props: Omit<StepperProps, 'children' | 'setActive'>) => {
  const { step, setStep, isFirst, isLast, goToNext, goToPrevious } = useStepper(3)

  return (
    <Flex gap="lg" direction="column">
      <Stepper active={step} setActive={setStep} {...props}>
        <StepperStep title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="bg" low>
            One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla
            natus at tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis
            ipsum iste!
          </Text>
        </StepperStep>
        <StepperStep icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="bg" low>
            Two Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla
            natus at tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis
            ipsum iste!
          </Text>
        </StepperStep>
        <StepperStep icon={<Settings />} title="Skills" description="Word is word no matter what happen">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="bg" low>
            Three Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla
            natus at tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis
            ipsum iste!
          </Text>
        </StepperStep>
      </Stepper>
      <Flex items="center" justify="center" gap="sm">
        <Button disabled={isLast} onClick={goToNext}>
          Next
        </Button>
        <Button disabled={isFirst} onClick={goToPrevious} variant="soft">
          Back
        </Button>
      </Flex>
    </Flex>
  )
}

export const StepperCorner = () => {
  return (
    <>
      <StepperBase corner="sharp" completeComponent={<CompleteComponent />} />
      <StepperBase corner="xs" completeComponent={<CompleteComponent />} />
      <StepperBase corner="sm" completeComponent={<CompleteComponent />} />
      <StepperBase corner="md" completeComponent={<CompleteComponent />} />
      <StepperBase corner="lg" completeComponent={<CompleteComponent />} />
      <StepperBase corner="xl" completeComponent={<CompleteComponent />} />
      <StepperBase corner="full" completeComponent={<CompleteComponent />} />
    </>
  )
}