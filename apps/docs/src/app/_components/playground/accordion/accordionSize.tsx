import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Heading, Paper, Text } from '@pillar-ui/core'
import React from 'react'

function AccordionBase(props: any) {
  return (
    <Accordion {...props}>
      <AccordionItem value={1}>
        <AccordionButton>
          <Text weight="5">Nice to Meet You</Text>
        </AccordionButton>
        <AccordionPanel>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt hic debitis, neque accusamus atque
          provident facilis vel ipsa illo officia aliquid dolore veritat iente at cum dolores.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value={2}>
        <AccordionButton>
          <Text weight="5">Nice to Meet You</Text>
        </AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
          perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
          veniam recusandae.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const AccordionSize = () => {
  return (
    <>
      <AccordionBase size="1" />
      <AccordionBase size="2" />
      <AccordionBase size="3" />
      <AccordionBase size="4" />
      <AccordionBase size="5" />
      <AccordionBase size="6" />
      <AccordionBase size="7" />
      <AccordionBase size="8" />
    </>
  )
}
