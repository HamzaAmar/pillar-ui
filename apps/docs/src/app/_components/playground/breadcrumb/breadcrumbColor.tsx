import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'

const breadcrumbsItems = [
  { name: 'Home', link: '.', current: false },
  { name: 'base-ui', link: '..', current: false },
  { name: 'components', link: '../..', current: false },
  { name: 'buttons', link: '../../..', current: true },
]

export const BreadcrumbColor = () => {
  return (
    <>
      <Breadcrumb color="dan">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Breadcrumb color="war">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Breadcrumb color="suc">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Breadcrumb color="sec">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Breadcrumb color="pri">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Breadcrumb color="bg">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  )
}
