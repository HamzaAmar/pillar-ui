import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Link, Text } from '@pillar-ui/core'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'Nice To Meet You',
  },
}

export default meta

export function LinkSizes() {
  return (
    <div className="l_flow__md">
      <Link href="#" size="3xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="2xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    </div>
  )
}

export function LinkWeights() {
  return (
    <div className="l_flow__md">
      <Link href="#" weight="thin">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" weight="extra-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" weight="light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>

      <Link href="#" weight="normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" weight="medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" weight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" weight="extra-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" weight="black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    </div>
  )
}
export function LinkTruncates() {
  return (
    <div className="l_flow__md">
      <Link href="#" size="3xl" truncate={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="3xl" truncate={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="3xl" truncate={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" size="3xl" truncate={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>

      <Link href="#" size="3xl" truncate={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>

      <Link href="#" size="3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    </div>
  )
}

export function LinkTrasforms() {
  return (
    <div className="l_flow__md">
      <Link href="#" transform="lowercase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" transform="capitalize">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" transform="uppercase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" transform="first-letter-only">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    </div>
  )
}

export function LinkDecorations() {
  return (
    <div className="l_flow__md">
      <Link href="#" decoration="through">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" decoration="under">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" decoration="over">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    </div>
  )
}

export function LinkFontStyles() {
  return (
    <div className="l_flow__md">
      <Link href="#" fontStyle="italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" fontStyle="oblique">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
    </div>
  )
}

type Contrast = 'low' | 'high'

export function LinkAligns() {
  return (
    <div className="l_flow__md">
      <Link href="#" align="start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" align="end">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
    </div>
  )
}

export function LinkColors() {
  return (
    <div className="l_flow__md">
      <Link href="#" color="danger" contrast="high">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>

      <Link href="#" color="secondary" contrast="high">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="success" contrast="high">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="warning" contrast="high">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="primary" contrast="high">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="bg" contrast="high">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>

      <Link href="#" color="danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
      <Link href="#" color="bg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
      </Link>
    </div>
  )
}

export function LinkLeadings() {
  return (
    <div className="l_flow__md">
      <Link href="#" leading="normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" leading="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" leading="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>
      <Link href="#" leading="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Link>

      <Link href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
    </div>
  )
}

export function LinkRTL() {
  return (
    <div className="l_flow__md">
      <Link href="#" dir="rtl">
        مُرَاكُش اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية
        من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203
        ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق
        أكادير.
      </Link>
      <Link href="#" dir="rtl">
        ކޯޑް ކުރަން ދަސްކުރުމަކީ އަހަރެންގެ މުޅި އުމުރުގައި ވެސް ކުރި އެންމެ ރަނގަޅު ކަމެކެވެ
      </Link>
    </div>
  )
}

export function LinkInsideParagraph() {
  return (
    <div className="l_flow__md">
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia tempora blanditiis? Fugiat eum
        consequatur, veritatis consequuntur debitis asperiores deleniti earum! Voluptas adipisci cupiditate quis quia
        rerum, ullam nulla repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis
        asperiores a dolores. Suscipit nemo repellendus quisquam id, ipsam eveniet accusantium? Ea iusto sequi
        voluptates quas esse animi{' '}
        <Link href="#" weight="medium">
          quasi magnam! Ut ipsam,
        </Link>{' '}
        in eveniet, voluptatem, sunt aperiam nulla soluta cumque accusantium accusamus optio sit consectetur culpa amet
        magnam totam aliquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tenetur est animi autem,
        perferendis aut similique. Autem placeat tenetur cumque labore laborum! Autem assumenda ratione id quasi
        expedita, accusantium minus? Vero ipsum, animi quisquam eum commodi harum dolor repudiandae assumenda, labore
        necessitatibus sunt sit totam et? Quibusdam repellendus eius at <Link href="#">aspernatur voluptas sequi</Link>
        et aspernatur voluptas sequi rem error, inventore animi sint expedita. Odit, facere iure. Iusto animi aliquam
        sapiente maxime quos dolore. Suscipit incidunt eaque inventore, architecto saepe provident, laborum neque,
        aperiam accusantium eos deleniti voluptatibus ut fugit eligendi explicabo est nostrum!
      </Text>
    </div>
  )
}

const Template: StoryFn<typeof Link> = (args) => <Link href="#" {...args} />

export const Playground = {
  render: Template,
}
