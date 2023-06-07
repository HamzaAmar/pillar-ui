import { Star } from '@pillar/icons'
import { MenuItemData } from './aside.type'
import { allComponents, allHooks } from 'contentlayer/generated'
import type { Components, Hooks } from 'contentlayer/generated'

const themes = [
  { slug: 'colors', title: 'Color', icon: <Star width="16" />, link: 'docs/themes/colors' },
  { slug: 'spacing', title: 'Spacing', icon: <Star width="16" />, link: 'docs/themes/spacing' },
]

function makeMenuField<T extends Components | Hooks = Components>(list: T[]) {
  return list.map(({ slug, title, type }) => {
    const linkType = type.toLocaleLowerCase()

    return {
      slug: slug,
      title: title,
      link: `docs/${linkType}/${slug}`,
    }
  })
}

export const MENU_CONTENT = {
  components: makeMenuField(allComponents),
  hooks: makeMenuField(allHooks),
  icons: null,
  getStarted: null,
  themes,
}

export const MENU_LIST: MenuItemData[] = ['get-started', 'components', 'hooks', 'icons', 'themes']
