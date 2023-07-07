import type { MenuItemData } from './aside.type'
import { allComponents, allGettingStarteds, allHooks, allThemes, allUtils } from 'contentlayer/generated'
import type { Components, GettingStarted, Hooks, Theme, Utils } from 'contentlayer/generated'

function makeMenuField<T extends Components | Hooks | Theme | Utils | GettingStarted = Components>(list: T[]) {
  return list.map(({ slug, title, root }) => {
    return {
      slug: slug,
      text: title,
      link: `/docs/${root}/${slug}`,
    }
  })
}

export const MENU_CONTENT = {
  'getting-started': makeMenuField(allGettingStarteds),
  themes: makeMenuField(allThemes),
  components: makeMenuField(allComponents),
  hooks: makeMenuField(allHooks),
  utils: makeMenuField(allUtils),
  icons: null,
}

export const MENU_LIST = Object.keys(MENU_CONTENT) as MenuItemData[]
