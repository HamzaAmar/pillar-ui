import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'

const breadcrumbsItems = [
  { name: 'components', link: '../..', current: false },
  { name: 'base-ui', link: '../', current: false },
  { name: 'breadcrumb', link: './', current: true },
]

export const BreadcrumbSize = () => {
  return (
    <>
      <Breadcrumb gap="2" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb gap="3" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="4" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb gap="5" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb gap="6" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb gap="7" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb gap="8" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  )
}
