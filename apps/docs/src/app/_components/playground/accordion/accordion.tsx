import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Heading, Paper, Text } from '@pillar-ui/core'
import React from 'react'

function AccordionBase(props: any) {
  return (
    <Accordion {...props}>
      <AccordionItem value={1}>
        <AccordionButton>
          <div>
            <Text weight="medium">Nice to Meet You</Text>
            <Text size="2xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia, consequatur nemo sapiente libero
              voluptatem obcaecati temporibus
            </Text>
          </div>
        </AccordionButton>
        <AccordionPanel>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt hic debitis, neque accusamus atque
          provident facilis vel ipsa illo officia aliquid dolore veritat iente at cum dolores.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value={2}>
        <AccordionButton>
          <div>
            <Text weight="medium">Nice to Meet You</Text>
            <Text size="2xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia, consequatur nemo sapiente libero
              voluptatem obcaecati temporibus
            </Text>
          </div>
        </AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
          perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
          veniam recusandae.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value={3}>
        <AccordionButton>
          <div>
            <Text weight="medium">Nice to Meet You</Text>
            <Text size="2xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia, consequatur nemo sapiente libero
              voluptatem obcaecati temporibus
            </Text>
          </div>
        </AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptates ratione doloremque quasi error odio
          animi mollitia? Blanditiis
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const AccordionPlayGround = () => {
  return (
    <Paper flow="sm" p="sm" background="bg-3" corner="sm">
      Hello
    </Paper>
  )
}

export const AccordionSizes = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="bg-3" corner="sm">
      <AccordionBase size="2xs" />
      <AccordionBase size="xs" />
      <AccordionBase size="sm" />
      <AccordionBase size="md" />
      <AccordionBase size="lg" />
      <AccordionBase size="xl" />
      <AccordionBase size="2xl" />
    </Paper>
  )
}

export const AccordionSubtitle = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="bg-3" corner="sm">
      <Accordion>
        <AccordionItem value={1}>
          <AccordionButton>
            <div>
              <Text>Hello</Text>{' '}
              <Text size="sm">
                {' '}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ipsum necessitatibus sunt praesentium
                quam qui laborum earum vitae, veniam tenetur mollitia fugiat numquam nesciunt? Velit quibusdam
                repudiandae distinctio. Ipsum, modi.
              </Text>
            </div>
          </AccordionButton>
          <AccordionPanel>Lorem, ipsum dolor sit amet consectetur adipisicing elit</AccordionPanel>
        </AccordionItem>
        <AccordionItem value={2}>
          <AccordionButton>
            <div>
              <Text>Hello</Text> <Text size="sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </div>
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
            perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
            veniam recusandae.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value={3}>
          <AccordionButton>
            <div>
              <Text>Hello</Text> <Text size="sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </div>
          </AccordionButton>
          <AccordionPanel>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptates ratione doloremque quasi error
            odio animi mollitia? Blanditiis
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Paper>
  )
}

export const AccordionSeparate = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="bg-3" corner="sm">
      <AccordionBase separate />
    </Paper>
  )
}

export const AccordionVariants = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="bg-3" corner="sm">
      <AccordionBase variant="solid" />
      <AccordionBase variant="soft" />
      <AccordionBase variant="outline" />
    </Paper>
  )
}

export const AccordionCorners = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="bg-3" corner="sm">
      <AccordionBase separate color="bg" variant="solid" corner="sharp" />
      <AccordionBase separate color="bg" variant="soft" corner="sm" />
      <AccordionBase separate color="bg" variant="outline" corner="md" />
      <AccordionBase separate color="bg" variant="solid" corner="lg" />
      <AccordionBase separate color="bg" variant="soft" corner="xl" />
      <AccordionBase separate color="bg" variant="outline" corner="full" />
    </Paper>
  )
}

export const AccordionType = () => {
  return (
    <Paper className="playground" flow="xl" p="sm" background="bg-3" corner="sm">
      <div className="l_f-sm">
        <Heading>Accordion Type Single</Heading>
        <AccordionBase type="single" />
      </div>

      <div className="l_f-sm">
        <Heading>Accordion Type Multiple</Heading>
        <AccordionBase type="multiple" />
      </div>
    </Paper>
  )
}

export const AccordionCollapsible = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="bg-3" corner="sm">
      <AccordionBase collapsible />
    </Paper>
  )
}

AccordionPlayGround.Sizes = AccordionSizes
AccordionPlayGround.Variants = AccordionVariants
AccordionPlayGround.Corners = AccordionCorners
AccordionPlayGround.Type = AccordionType
AccordionPlayGround.Collapsible = AccordionCollapsible
AccordionPlayGround.Separate = AccordionSeparate
AccordionPlayGround.Subtitle = AccordionSubtitle
