import React from 'react'
import { Check, Home, Settings, User } from '@pillar-ui/icons'
import type { Meta } from '@storybook/react'
import { Button, Flex, Heading, Text, Stepper, StepperStep } from '@pillar-ui/core'
import { useStepper } from '@pillar-ui/hooks'

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
}

export default meta

const CompleteComponent = () => {
  return (
    <Flex items="center" justify="center" gap="3" direction="col">
      <div style={{ color: 'white', background: 'var(--green-9)', padding: '.5rem', borderRadius: '1rem' }}>
        <Check width={60} />
      </div>
      <Text weight="7">Success</Text>
      <Text style={{ width: '90ch' }} size="4" color="b" low>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, illum, ut eius esse voluptates voluptatibus
        perferendis laborum, quam temporibus consequuntur iure porro excepturi dolore. Enim labore id tempore iusto sed?{' '}
      </Text>
    </Flex>
  )
}

export const StepperIcon = () => {
  const { step, setStep, isFirst, isLast, goToNext, goToPrevious } = useStepper(3)

  return (
    <Flex gap="6" direction="col">
      <Stepper active={step} setActive={setStep} completeComponent={<CompleteComponent />}>
        <StepperStep title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="3">Hello World</Heading>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </StepperStep>
        <StepperStep icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="3">Hello World</Heading>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </StepperStep>
        <StepperStep icon={<Settings />} title="Skills" description="Word is word no matter what happen">
          <Heading size="3">Hello World</Heading>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </StepperStep>
      </Stepper>
      <Flex items="center" justify="center" gap="4">
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

function StepperBase(props) {
  const { step, setStep, isFirst, isLast, goToNext, goToPrevious } = useStepper(3)

  return (
    <Flex gap="6" direction="col">
      <Stepper active={step} setActive={setStep} corner="0" {...props} completeComponent={<CompleteComponent />}>
        <StepperStep title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="3">Hello World</Heading>
          <Text size="4" color="b" low>
            Hello
          </Text>
        </StepperStep>
        <StepperStep icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="3">Hello World</Heading>
          <Text size="4" color="b" low>
            World
          </Text>
        </StepperStep>
        <StepperStep icon={<Settings />} title="Skills" description="Word is word no matter what happen">
          <Heading size="3">Hello World</Heading>
          <Text size="4" color="b" low>
            Nice{' '}
          </Text>
        </StepperStep>
      </Stepper>
      <Flex items="center" justify="center" gap="4">
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

export const StepperCorners = () => {
  return (
    <div className="Sf-4">
      <StepperBase corner="0" />
      <StepperBase corner="3" />
      <StepperBase corner="2" />
      <StepperBase corner="3" />
      <StepperBase corner="4" />
      <StepperBase corner="5" />
      <StepperBase corner="full" />
    </div>
  )
}

export const StepperColors = () => {
  return (
    <div className="Sf-4">
      <StepperBase color="d" />
      <StepperBase color="w" />
      <StepperBase color="su" />
      <StepperBase color="se" />
      <StepperBase color="b" />
      <StepperBase color="p" />
    </div>
  )
}

export const DefaultStepper = () => {
  const { step, setStep, isFirst, isLast, goToNext, goToPrevious } = useStepper(3)

  return (
    <Flex gap="6" direction="col">
      <Stepper active={step} setActive={setStep} completeComponent={<CompleteComponent />}>
        <StepperStep title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="3">Hello World</Heading>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </StepperStep>
        <StepperStep icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="3">Hello Nice</Heading>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </StepperStep>
        <StepperStep icon={<Settings />} title="Skills" description="Word is word no matter what happen">
          <Heading size="3">Nice to Meet You</Heading>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla natus at
            tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis ipsum iste!
          </Text>
        </StepperStep>
      </Stepper>

      <Flex items="center" justify="center" gap="4">
        <Button disabled={isLast} onClick={goToNext}>
          Next{' '}
        </Button>
        <Button disabled={isFirst} onClick={goToPrevious} variant="soft">
          Back
        </Button>
      </Flex>
    </Flex>
  )
}
