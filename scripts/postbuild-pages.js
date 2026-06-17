import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const distDir = join(projectRoot, 'dist')
const indexFile = join(distDir, 'index.html')
const routes = ['about', 'services', 'equipment', 'pricing', 'cases', 'contacts']

if (!existsSync(indexFile)) {
  throw new Error('dist/index.html was not found. Run vite build before postbuild-pages.')
}

routes.forEach((route) => {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  copyFileSync(indexFile, join(routeDir, 'index.html'))
})

copyFileSync(indexFile, join(distDir, '404.html'))
