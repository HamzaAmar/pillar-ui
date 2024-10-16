import React from 'react'
import { Meta } from '@storybook/react'
import { Heading } from '@pillar-ui/core'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Nice To Meet You',
  },
}

export default meta

export function HeadingSizes() {
  return (
    <div className="Sf-4">
      <Heading size="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
    </div>
  )
}

export function HeadingWeights() {
  return (
    <div className="Sf-4">
      <Heading weight="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading weight="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading weight="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>

      <Heading weight="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading weight="5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading weight="7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading weight="8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading weight="9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
    </div>
  )
}
export function HeadingTrucates() {
  return (
    <div className="Sf-4">
      <Heading size="9" truncate="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="9" truncate="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="9" truncate="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading size="9" truncate="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>

      <Heading size="9" truncate="5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>

      <Heading size="9">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
    </div>
  )
}

export function HeadingTrasforms() {
  return (
    <div className="Sf-4">
      <Heading transform="lowercase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
      <Heading transform="capitalize">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
      <Heading transform="uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
      <Heading transform="capitalize-once">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
    </div>
  )
}

export function HeadingDecorations() {
  return (
    <div className="Sf-4">
      <Heading decoration="through">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
      <Heading decoration="under">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
      <Heading decoration="over">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
    </div>
  )
}

export function HeadingFontStyles() {
  return (
    <div className="Sf-4">
      <Heading fontStyle="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
      <Heading fontStyle="oblique">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
      <Heading>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
    </div>
  )
}

type Contrast = 'low' | 'high'

export function HeadingAligns() {
  return (
    <div className="Sf-4">
      <Heading align="start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading align="end">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
    </div>
  )
}

export function HeadingColors() {
  return (
    <div className="Sf-4">
      <Heading color="d">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>

      <Heading color="se">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="su">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="w">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="b">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>

      <Heading color="d" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="se" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="su" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="w" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="p" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
      <Heading color="b" low>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Heading>
    </div>
  )
}

export function HeadingLeadings() {
  return (
    <div className="Sf-4">
      <Heading leading="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading leading="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading leading="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
      <Heading leading="4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>

      <Heading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Heading>
    </div>
  )
}

export function HeadingRTL() {
  return (
    <div className="Sf-4">
      <Heading dir="rtl">
        مُرَاكُش اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية
        من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203
        ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق
        أكادير.
      </Heading>
      <Heading dir="rtl">ללמוד לקוד זה אחד הדברים הכי טובים שאני עושה כל חיי</Heading>
      <Heading dir="rtl">ކޯޑް ކުރަން ދަސްކުރުމަކީ އަހަރެންގެ މުޅި އުމުރުގައި ވެސް ކުރި އެންމެ ރަނގަޅު ކަމެކެވެ</Heading>
    </div>
  )
}

export function HeadingWidth() {
  return (
    <div className="Sf-5">
      <Heading width="25c">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Heading>
      <Heading width="30c">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Heading>
      <Heading width="25c">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Heading>
      <Heading width="60c">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Heading>
      <Heading width="75c">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Heading>
      <Heading width="90c">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur placeat blanditiis minima fugiat
        cupiditate, error aperiam sed nesciunt similique perspiciatis quia doloremque ipsum reiciendis adipisci. Neque
        ad quae repudiandae quam!
      </Heading>
    </div>
  )
}

export const Playground = {}
