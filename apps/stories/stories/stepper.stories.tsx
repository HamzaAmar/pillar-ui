import React from 'react'
import { Check, Home, Settings, User } from '@pillar-ui/icons'
import type { Meta } from '@storybook/react'
import { Button, Flex, Heading, Text, Stepper } from '@pillar-ui/core'
import { useStepper } from '@pillar-ui/hooks'

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as Meta<typeof Stepper>

const CompleteComponent = () => {
  return (
    <Flex items="center" justify="center" gap="xs" direction="column">
      <div style={{ color: 'white', background: 'var(--green-9)', padding: '.5rem', borderRadius: '1rem' }}>
        <Check width={60} />
      </div>
      <Text weight="bold">Success</Text>
      <Text style={{ width: '90ch' }} size="sm" color="surface" contrast="low">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, illum, ut eius esse voluptates voluptatibus
        perferendis laborum, quam temporibus consequuntur iure porro excepturi dolore. Enim labore id tempore iusto sed?{' '}
      </Text>
    </Flex>
  )
}

export const StepperIcon = () => {
  const { currentStep, setCurrentStep, isFirst, isLast, goToNextStep, goToPreviousStep } = useStepper(3)

  return (
    <Flex gap="lg" direction="column">
      <Stepper active={currentStep} setActive={setCurrentStep} completeComponent={<CompleteComponent />}>
        <Stepper.Step title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<Settings />} title="Skills" description="Word is word no matter what happen">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
      </Stepper>
      <Flex items="center" justify="center" gap="sm">
        <Button disabled={isLast} onClick={goToNextStep}>
          Next
        </Button>
        <Button disabled={isFirst} onClick={goToPreviousStep} variant="soft">
          Back
        </Button>
      </Flex>
    </Flex>
  )
}

function StepperBase(props) {
  const { currentStep, setCurrentStep, isFirst, isLast, goToNextStep, goToPreviousStep } = useStepper(3)

  return (
    <Flex gap="lg" direction="column">
      <Stepper
        active={currentStep}
        setActive={setCurrentStep}
        corner="sharp"
        {...props}
        completeComponent={<CompleteComponent />}
      >
        <Stepper.Step title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            Hello
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            World
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<Settings />} title="Skills" description="Word is word no matter what happen">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            Nice{' '}
          </Text>
        </Stepper.Step>
      </Stepper>
      <Flex items="center" justify="center" gap="sm">
        <Button disabled={isLast} onClick={goToNextStep}>
          Next
        </Button>
        <Button disabled={isFirst} onClick={goToPreviousStep} variant="soft">
          Back
        </Button>
      </Flex>
    </Flex>
  )
}

export const StepperCorners = () => {
  return (
    <div className="l_flow__md">
      <StepperBase corner="sharp" />
      <StepperBase corner="xs" />
      <StepperBase corner="sm" />
      <StepperBase corner="md" />
      <StepperBase corner="lg" />
      <StepperBase corner="xl" />
      <StepperBase corner="full" />
    </div>
  )
}

export const StepperColors = () => {
  return (
    <div className="l_flow__md">
      <StepperBase color="danger" />
      <StepperBase color="warning" />
      <StepperBase color="success" />
      <StepperBase color="secondary" />
      <StepperBase color="surface" />
      <StepperBase color="primary" />
    </div>
  )
}

export const DefaultStepper = () => {
  const { currentStep, setCurrentStep, isFirst, isLast, goToNextStep, goToPreviousStep } = useStepper(3)

  return (
    <Flex gap="lg" direction="column">
      <Stepper active={currentStep} setActive={setCurrentStep} completeComponent={<CompleteComponent />}>
        <Stepper.Step title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="xs">Hello Nice</Heading>
          <Text size="sm" color="surface" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<Settings />} title="Skills" description="Word is word no matter what happen">
          <Heading size="xs">Nice to Meet You</Heading>
          <Text size="sm" color="surface" contrast="low">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </Stepper.Step>
      </Stepper>

      <Flex items="center" justify="center" gap="sm">
        <Button disabled={isLast} onClick={goToNextStep}>
          Next{' '}
        </Button>
        <Button disabled={isFirst} onClick={goToPreviousStep} variant="soft">
          Back
        </Button>
      </Flex>
    </Flex>
  )
}
