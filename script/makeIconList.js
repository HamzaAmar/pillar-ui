const fs = require('fs')
const path = require('path')

const iconsDir = path.join(__dirname, '../packages/pillar-icons/src/icons')
const homeFilePath = path.join(__dirname, '../apps/docs/src/constant/icons/icons.json')

function getIconName(fileContent) {
  const exportRegex = /export\s*{\s*default\s+as\s+(\w+)\s*}/g
  const matches = [...fileContent.matchAll(exportRegex)]
  return matches.map((match) => match[1])
}

function processIconsDirectory(directoryPath) {
  const subDirectories = fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => path.join(directoryPath, dir.name))

  const iconNames = {}

  subDirectories.forEach((subDirPath) => {
    const indexPath = path.join(subDirPath, 'index.ts')
    const iconFileContent = fs.readFileSync(indexPath, 'utf8')
    const folderName = path.basename(subDirPath)
    const iconName = getIconName(iconFileContent)
    if (iconName.length > 0) {
      iconNames[folderName] = iconName
    }
    // if (iconName) {
    //   fs.appendFileSync(homeFilePath, `export { default as ${iconName} } from '${subDirPath}';\n`)
    // }
  })

  return iconNames
}
fs.writeFileSync(homeFilePath, '')

const icons = processIconsDirectory(iconsDir)

fs.appendFileSync(homeFilePath, JSON.stringify(icons, null, 2))

console.log('Icons processing completed!')
