import type { ApiFileNames, GlobalFileNames } from './generated/filenames'
import type { EtsLibType, GeneratedEtsLibFile } from './types/generated'
import { createRequire } from 'node:module'
import path from 'node:path'

interface GeneratedEtsLibModule {
  FILE: GeneratedEtsLibFile
}

export function loadEtsLibFile<Type extends EtsLibType>(type: Type, path: Type extends 'global' ? GlobalFileNames : ApiFileNames): Record<string, string> | Error
export function loadEtsLibFile(type: EtsLibType, filename: GlobalFileNames | ApiFileNames): Record<string, string> | Error {
  const require = createRequire(import.meta.url)
  const dirname = new URL('.', import.meta.url).pathname

  try {
    const module: GeneratedEtsLibModule = require(path.resolve(`${dirname}/generated/${type}/${filename}.mjs`))
    return {
      [module.FILE.path]: module.FILE.content,
    }
  }
  catch (error) {
    return error as Error
  }
}

export function loadAllApiFiles(): Record<string, string> {
  const require = createRequire(import.meta.url)
  const dirname = new URL('.', import.meta.url).pathname
  const filenames: typeof import('./generated/filenames') = require(path.resolve(`${dirname}/generated/filenames.mjs`))
  const result: Record<string, string> = {}
  for (const filename of filenames.API_FILENAMES) {
    const res = loadEtsLibFile('api', filename)
    if (res instanceof Error)
      throw res
    Object.assign(result, res)
  }
  return result
}

export function loadAllGlobalFiles(): Record<string, string> {
  const require = createRequire(import.meta.url)
  const dirname = new URL('.', import.meta.url).pathname
  const filenames: typeof import('./generated/filenames') = require(path.resolve(`${dirname}/generated/filenames.mjs`))
  const result: Record<string, string> = {}
  for (const filename of filenames.GLOBAL_FILENAMES) {
    const res = loadEtsLibFile('global', filename)
    if (res instanceof Error)
      throw res
    Object.assign(result, res)
  }
  return result
}
