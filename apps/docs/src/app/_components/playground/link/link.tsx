import { Link, Flex, Paper } from '~/component/core/pillar'
import React from 'react'

export const LinkPlayGround = () => {
  return (
    <Paper as={Flex} gap="xs" direction="column" items="center" border p="sm" background="bg-3" corner="sm">
      <Link size="2xs">Hello World</Link>
      <Link size="xs">Hello World</Link>
      <Link size="sm">Hello World</Link>
      <Link size="md">Hello World</Link>
      <Link size="lg">Hello World</Link>
      <Link size="xl">Hello World</Link>
      <Link size="2xl">Hello World</Link>
    </Paper>
  )
}

export const LinkSizes = () => {
  return (
    <Paper as={Flex} gap="xs" direction="column" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Link size="2xs">Hello World</Link>
      <Link size="xs">Hello World</Link>
      <Link size="sm">Hello World</Link>
      <Link size="md">Hello World</Link>
      <Link size="lg">Hello World</Link>
      <Link size="xl">Hello World</Link>
      <Link size="2xl">Hello World</Link>
    </Paper>
  )
}

export const LinkLeading = () => {
  return (
    <Paper as={Flex} gap="xs" direction="column" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Link leading="normal">This heading has a normal line height.</Link>
      <Link leading="sm">This heading has a small line height.</Link>
      <Link leading="md">This heading has a medium line height.</Link>
      <Link leading="lg">This heading has a large line height.</Link>
    </Paper>
  )
}

export const LinkWeight = () => {
  return (
    <Paper as={Flex} gap="xs" direction="column" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Link weight="extra-light">Hello World</Link>
      <Link weight="light">Hello World</Link>
      <Link weight="thin">Hello World</Link>
      <Link weight="normal">Hello World</Link>
      <Link weight="medium">Hello World</Link>
      <Link weight="semi-bold">Hello World</Link>
      <Link weight="bold">Hello World</Link>
      <Link weight="extra-bold">Hello World</Link>
      <Link weight="black">Hello World</Link>
    </Paper>
  )
}

export const LinkRTL = () => {
  return (
    <Paper as={Flex} gap="xs" direction="column" items="center" border p="sm" background="bg-3" corner="sm">
      <Link dir="rtl">
        مُرَاكُش اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية
        من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203
        ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق
        أكادير.
      </Link>
      <Link dir="rtl">ללמוד לקוד זה אחד הדברים הכי טובים שאני עושה כל חיי</Link>
      <Link dir="rtl">ކޯޑް ކުރަން ދަސްކުރުމަކީ އަހަރެންގެ މުޅި އުމުރުގައި ވެސް ކުރި އެންމެ ރަނގަޅު ކަމެކެވެ</Link>
    </Paper>
  )
}

export const LinkAlign = () => {
  return (
    <Paper as={Flex} gap="xs" direction="column" border p="sm" background="bg-3" corner="sm">
      <Link align="start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>
      <Link align="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>
      <Link align="end">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>
    </Paper>
  )
}

export const LinkColors = () => {
  return (
    <Paper as={Flex} direction="column" items="center" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Link color="dan">Hello World</Link>
      <Link color="suc">Hello World</Link>
      <Link color="war">Hello World</Link>
      <Link color="pri">Hello World</Link>
      <Link color="bg">Hello World</Link>
      <Link color="sec">Hello World</Link>

      <Link contrast="low" color="dan">
        Hello World
      </Link>
      <Link contrast="low" color="suc">
        Hello World
      </Link>
      <Link contrast="low" color="war">
        Hello World
      </Link>
      <Link contrast="low" color="pri">
        Hello World
      </Link>
      <Link contrast="low" color="bg">
        Hello World
      </Link>
      <Link contrast="low" color="sec">
        Hello World
      </Link>
    </Paper>
  )
}

export function LinkTrucates() {
  return (
    <Paper as={Flex} direction="column" items="center" border p="sm" flow="sm" background="bg-3" corner="sm">
      <Link size="3xl" truncate={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>
      <Link size="3xl" truncate={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>
      <Link size="3xl" truncate={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>
      <Link size="3xl" truncate={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>

      <Link size="3xl" truncate={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>

      <Link size="3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione saepe, enim impedit totam minus corrupti sequi
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
        eveniet sunt animi laborum optio dolores dolorum! Libero iste tempora, facilis dolore molestiae temporibus!
      </Link>
    </Paper>
  )
}
