import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Heading, Paper, Text } from '@pillar-ui/core'
import React from 'react'

function AccordionBase(props: any) {
  return (
    <Accordion {...props}>
      <AccordionItem value={1}>
        <AccordionButton>Hello world</AccordionButton>
        <AccordionPanel>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt hic debitis, neque accusamus atque
          provident facilis vel ipsa illo officia aliquid dolore veritat iente at cum dolores.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value={2}>
        <AccordionButton>Hello world</AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
          perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
          veniam recusandae.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const AccordionCollapsible = () => {
  return (
    <>
      <AccordionBase collapsible />
    </>
  )
}
