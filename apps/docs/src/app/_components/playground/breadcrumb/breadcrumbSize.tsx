import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'

const breadcrumbsItems = [
  { name: 'components', link: '../..', current: false },
  { name: 'base-ui', link: '../', current: false },
  { name: 'breadcrumb', link: './', current: true },
]

export const BreadcrumbSize = () => {
  return (
    <>
      <Breadcrumb size="2xs" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="xs" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="sm" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="md" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="lg" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="xl" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="2xl" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  )
}
