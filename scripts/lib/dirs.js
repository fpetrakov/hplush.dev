import { dirname, join } from 'path'

let self = new URL(import.meta.url).pathname

export const ROOT = join(dirname(self), '..', '..')
export const DIST = join(ROOT, 'dist')
export const SRC = join(ROOT, 'src')
