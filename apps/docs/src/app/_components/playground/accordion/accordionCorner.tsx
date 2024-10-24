import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Heading, Paper, Text } from '@pillar-ui/core'
import React from 'react'

function AccordionBase(props: any) {
  return (
    <Accordion {...props}>
      <AccordionItem value={1}>
        <AccordionButton>
          <div>
            <Text weight="5">Nice to Meet You</Text>
            <Text size="2">
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
            <Text weight="5">Nice to Meet You</Text>
            <Text size="2">
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
            <Text weight="5">Nice to Meet You</Text>
            <Text size="2">
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

export const AccordionCorner = () => {
  return (
    <>
      <AccordionBase separate variant="soft" corner="0" />
      <AccordionBase separate variant="soft" corner="1" />
      <AccordionBase separate variant="soft" corner="2" />
      <AccordionBase separate variant="soft" corner="3" />
      <AccordionBase separate variant="soft" corner="4" />
      <AccordionBase separate variant="soft" corner="5" />
      <AccordionBase separate variant="soft" corner="full" />
    </>
  )
}
