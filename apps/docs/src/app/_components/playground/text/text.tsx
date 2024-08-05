import { Text, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const TextPlayGround = () => {
  return (
    <Paper as={Flex} wrap gap="sm" border p="sm" background="bg-3" corner="sm" items="center">
      <Text size="2xs">Hello World</Text>
      <Text size="xs">Hello World</Text>
      <Text size="sm">Hello World</Text>
      <Text size="md">Hello World</Text>
      <Text size="lg">Hello World</Text>
      <Text size="xl">Hello World</Text>
      <Text size="2xl">Hello World</Text>
    </Paper>
  )
}

export const TextSizes = () => {
  return (
    <Paper border p="sm" flow="sm" background="bg-3" corner="sm">
      <Text size="2xs">Hello World</Text>
      <Text size="xs">Hello World</Text>
      <Text size="sm">Hello World</Text>
      <Text size="md">Hello World</Text>
      <Text size="lg">Hello World</Text>
      <Text size="xl">Hello World</Text>
      <Text size="2xl">Hello World</Text>
    </Paper>
  )
}

export const TextLeading = () => {
  return (
    <Paper border p="sm" flow="sm" background="bg-3" corner="sm">
      <Text leading="normal">This heading has a normal line height.</Text>
      <Text leading="sm">This heading has a small line height.</Text>
      <Text leading="md">This heading has a medium line height.</Text>
      <Text leading="lg">This heading has a large line height.</Text>
    </Paper>
  )
}

export const TextWeight = () => {
  return (
    <Paper border p="sm" flow="sm" background="bg-3" corner="sm">
      <Text weight="extra-light">Hello World</Text>
      <Text weight="light">Hello World</Text>
      <Text weight="thin">Hello World</Text>
      <Text weight="normal">Hello World</Text>
      <Text weight="medium">Hello World</Text>
      <Text weight="semi-bold">Hello World</Text>
      <Text weight="bold">Hello World</Text>
      <Text weight="extra-bold">Hello World</Text>
      <Text weight="black">Hello World</Text>
    </Paper>
  )
}

export const TextRTL = () => {
  return (
    <Paper border p="sm" flow="sm" background="bg-3" corner="sm">
      <Text dir="rtl">
        مُرَاكُش اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية
        من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203
        ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق
        أكادير.
      </Text>
      <Text dir="rtl">ללמוד לקוד זה אחד הדברים הכי טובים שאני עושה כל חיי</Text>
      <Text dir="rtl">ކޯޑް ކުރަން ދަސްކުރުމަކީ އަހަރެންގެ މުޅި އުމުރުގައި ވެސް ކުރި އެންމެ ރަނގަޅު ކަމެކެވެ</Text>
    </Paper>
  )
}

export const TextAlign = () => {
  return (
    <Paper border p="sm" flow="sm" background="bg-3" corner="sm">
      <Text align="start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text align="end">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
    </Paper>
  )
}

export const TextColors = () => {
  return (
    <Paper border p="sm" flow="sm" background="bg-3" corner="sm">
      <Text color="dan">Hello World</Text>
      <Text color="suc">Hello World</Text>
      <Text color="war">Hello World</Text>
      <Text color="pri">Hello World</Text>
      <Text color="bg">Hello World</Text>
      <Text color="sec">Hello World</Text>

      <Text contrast="low" color="dan">
        Hello World
      </Text>
      <Text contrast="low" color="suc">
        Hello World
      </Text>
      <Text contrast="low" color="war">
        Hello World
      </Text>
      <Text contrast="low" color="pri">
        Hello World
      </Text>
      <Text contrast="low" color="bg">
        Hello World
      </Text>
      <Text contrast="low" color="sec">
        Hello World
      </Text>
    </Paper>
  )
}

export function TextTrucates() {
  return (
    <div className="l_flow__md">
      <Text size="3xl" truncate={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="3xl" truncate={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="3xl" truncate={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="3xl" truncate={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>

      <Text size="3xl" truncate={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>

      <Text size="3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
    </div>
  )
}
