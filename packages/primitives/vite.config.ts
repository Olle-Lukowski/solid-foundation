import { createLibConfig } from '@solid-foundation/vite-config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default createLibConfig('SolidFoundationPrimitives', { bundleInternalDeps: true, dirname: __dirname })
