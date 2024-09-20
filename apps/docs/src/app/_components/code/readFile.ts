import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export const readExampleFile = async (root: string, name: string) => {
  const filePath = resolve(`src/app/_components/playground`, root, `${name}.tsx`)

  try {
    return await readFile(filePath, 'utf-8')
  } catch (err) {
    console.log(err)
    return ''
  }
  //   fileContent = fileContent
  // .replaceAll('compositions/ui', '@/components/ui')
  // .replace(/export const \w+ = \(\) => \{/, 'const Demo = () => {')

  //   return fileContent
}
