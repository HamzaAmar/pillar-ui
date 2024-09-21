import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DIST_PATH = path.join(__dirname, '..', 'dist', 'core')

// Function to add "use client" to a file
async function addUseClient(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    const isNotExist = !data.trim().startsWith("'use client';")
    if (isNotExist) {
      const updatedContent = `'use client';\n${data}`
      await fs.writeFile(filePath, updatedContent, 'utf8')
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
      const hasClient = item.includes('.client')
      if (hasClient) {
        const itemPath = path.join(dir, item)
        const stats = await fs.stat(itemPath)
        const [isFile, isDirectory] = [stats.isFile(), stats.isDirectory()]

        if (isDirectory) {
          await injectUseClient(itemPath)
        } else if (isFile && (item === 'index.js' || item === 'index.mjs')) {
          await addUseClient(itemPath)
        }
      }
    }
    console.log('Processing complete.')
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error)
  }
}
injectUseClient()
