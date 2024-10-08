import React from 'react'
import { Meta } from '@storybook/react'
import { Text } from '@pillar-ui/core'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Nice To Meet You',
  },
}

export default meta

export function TextSizes() {
  return (
    <div className="l_flow">
      <Text size="3xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="2xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
    </div>
  )
}

export function TextWeights() {
  return (
    <div className="l_flow">
      <Text weight="thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text weight="extra-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text weight="light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>

      <Text weight="normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text weight="medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text weight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text weight="extra-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text weight="black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
    </div>
  )
}
export function TextTrucates() {
  return (
    <div className="l_flow">
      <Text size="3xl" truncate="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="3xl" truncate="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="3xl" truncate="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text size="3xl" truncate="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>

      <Text size="3xl" truncate="5">
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

export function TextTrasforms() {
  return (
    <div className="l_flow">
      <Text transform="lowercase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text transform="capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text transform="uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text transform="first-letter-only">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </div>
  )
}

export function TextDecorations() {
  return (
    <div className="l_flow">
      <Text decoration="through">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text decoration="under">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text decoration="over">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </div>
  )
}

export function TextFontStyles() {
  return (
    <div className="l_flow">
      <Text fontStyle="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text fontStyle="oblique">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
    </div>
  )
}

type Contrast = 'low' | 'high'

export function TextAligns() {
  return (
    <div className="l_flow">
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
    </div>
  )
}

export function TextColors() {
  return (
    <div className="l_flow">
      <Text color="dan">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>

      <Text color="sec">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
      <Text color="suc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
      <Text color="war">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
      <Text color="pri">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
      <Text color="bg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>

      <Text color="dan" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>

      <Text color="sec" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
      <Text color="suc" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
      <Text color="war" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
      <Text color="pri" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
      <Text color="bg" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Text>
    </div>
  )
}

export function TextLeadings() {
  return (
    <div className="l_flow">
      <Text leading="normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text leading="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text leading="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
      <Text leading="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Text>
    </div>
  )
}

export function TextRTL() {
  return (
    <div className="l_flow">
      <Text dir="rtl">
        مُرَاكُش اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية
        من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203
        ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق
        أكادير.
      </Text>
      <Text dir="rtl">ކޯޑް ކުރަން ދަސްކުރުމަކީ އަހަރެންގެ މުޅި އުމުރުގައި ވެސް ކުރި އެންމެ ރަނގަޅު ކަމެކެވެ</Text>
    </div>
  )
}

export function TextWidth() {
  return (
    <div className="l_f-lg">
      <Text width="25-char">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Text>
      <Text width="30-char">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Text>
      <Text width="45-char">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Text>
      <Text width="60-char">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Text>
      <Text width="75-char">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Text>
      <Text width="90-char">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Text>
    </div>
  )
}

export const Playground = {}
