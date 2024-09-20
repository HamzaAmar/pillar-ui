import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'
import { Minus } from '@pillar-ui/icons'

const breadcrumbsItems = [
  { name: 'components', link: '../..', current: false },
  { name: 'base-ui', link: '../', current: false },
  { name: 'breadcrumb', link: './', current: true },
]

export const BreadcrumbSeparator = () => {
  return (
    <>
      <Breadcrumb>
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb separator="*">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb separator={<Minus width={10} />}>
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  )
}
