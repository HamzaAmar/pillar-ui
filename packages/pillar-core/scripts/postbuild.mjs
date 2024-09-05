import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory
const DIST_PATH = path.join(__dirname, '..', 'dist', 'core')

// Function to add "use client" to a file
async function addUseClient(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8')
    if (!content.trim().startsWith('"use client";')) {
      const newContent = '"use client";\n' + content
      await fs.writeFile(filePath, newContent)
    } else {
      console.log(`'use client' already present in ${filePath}`)
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
  }
}

// Recursive function to process directories
export async function injectUseClient(dir = DIST_PATH) {
  try {
    const items = await fs.readdir(dir)
    for (const item of items) {
      const itemPath = path.join(dir, item)
      const stats = await fs.stat(itemPath)
      if (stats.isDirectory()) {
        await injectUseClient(itemPath)
      } else if (stats.isFile() && (item === 'index.js' || item === 'index.mjs')) {
        await addUseClient(itemPath)
      }
    }
    console.log('Processing complete.')
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error)
  }
}
