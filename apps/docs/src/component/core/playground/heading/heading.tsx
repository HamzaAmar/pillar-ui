import { Heading, Flex, Paper } from '@pillar-ui/core'
import React from 'react'

export const HeadingPlayGround = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <Heading size="2xs">Hello World</Heading>
      <Heading size="xs">Hello World</Heading>
      <Heading size="sm">Hello World</Heading>
      <Heading size="md">Hello World</Heading>
      <Heading size="lg">Hello World</Heading>
      <Heading size="xl">Hello World</Heading>
      <Heading size="2xl">Hello World</Heading>
    </Paper>
  )
}

export const HeadingSizes = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="md" background="surface-3" corner="sm">
      <Heading size="2xs">Hello World</Heading>
      <Heading size="xs">Hello World</Heading>
      <Heading size="sm">Hello World</Heading>
      <Heading size="md">Hello World</Heading>
      <Heading size="lg">Hello World</Heading>
      <Heading size="xl">Hello World</Heading>
      <Heading size="2xl">Hello World</Heading>
    </Paper>
  )
}

export const HeadingLeading = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="md" background="surface-3" corner="sm">
      <Heading leading="normal">This heading has a normal line height.</Heading>
      <Heading leading="sm">This heading has a small line height.</Heading>
      <Heading leading="md">This heading has a medium line height.</Heading>
      <Heading leading="lg">This heading has a large line height.</Heading>
    </Paper>
  )
}

export const HeadingWeight = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="md" background="surface-3" corner="sm">
      <Heading weight="extra-light">Hello World</Heading>
      <Heading weight="light">Hello World</Heading>
      <Heading weight="thin">Hello World</Heading>
      <Heading weight="normal">Hello World</Heading>
      <Heading weight="medium">Hello World</Heading>
      <Heading weight="semi-bold">Hello World</Heading>
      <Heading weight="bold">Hello World</Heading>
      <Heading weight="extra-bold">Hello World</Heading>
      <Heading weight="black">Hello World</Heading>
    </Paper>
  )
}

export const HeadingRTL = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="md" background="surface-3" corner="sm">
      <Heading dir="rtl">
        مُرَاكُش اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية
        من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203
        ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق
        أكادير.
      </Heading>
      <Heading dir="rtl">ކޯޑް ކުރަން ދަސްކުރުމަކީ އަހަރެންގެ މުޅި އުމުރުގައި ވެސް ކުރި އެންމެ ރަނގަޅު ކަމެކެވެ</Heading>
    </Paper>
  )
}

export const HeadingAlign = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="md" background="surface-3" corner="sm">
      <Heading align="start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe,</Heading>
      <Heading align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe,</Heading>
      <Heading align="end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe,</Heading>
    </Paper>
  )
}

export const HeadingColors = () => {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="md" background="surface-3" corner="sm">
      <Heading color="danger">Hello World</Heading>
      <Heading color="success">Hello World</Heading>
      <Heading color="warning">Hello World</Heading>
      <Heading color="primary">Hello World</Heading>
      <Heading color="surface">Hello World</Heading>
      <Heading color="secondary">Hello World</Heading>

      <Heading contrast="low" color="danger">
        Hello World
      </Heading>
      <Heading contrast="low" color="success">
        Hello World
      </Heading>
      <Heading contrast="low" color="warning">
        Hello World
      </Heading>
      <Heading contrast="low" color="primary">
        Hello World
      </Heading>
      <Heading contrast="low" color="surface">
        Hello World
      </Heading>
      <Heading contrast="low" color="secondary">
        Hello World
      </Heading>
    </Paper>
  )
}

export function HeadingTrucates() {
  return (
    <Paper className="playground" borderColor="opacity-6" p="sm" flow="md" background="surface-3" corner="sm">
      <Heading size="xl" truncate={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="xl" truncate={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="xl" truncate={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="xl" truncate={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>

      <Heading size="xl" truncate={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>

      <Heading size="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
    </Paper>
  )
}

HeadingPlayGround.Colors = HeadingColors
HeadingPlayGround.Sizes = HeadingSizes
HeadingPlayGround.Weight = HeadingWeight
HeadingPlayGround.Leading = HeadingLeading
HeadingPlayGround.RTL = HeadingRTL
HeadingPlayGround.Align = HeadingAlign
HeadingPlayGround.Trucates = HeadingTrucates
