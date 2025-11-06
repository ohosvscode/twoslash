import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'
import { defineConfig } from 'tsdown'

const etsGlobalScopeFiles = fg.sync([
  'ets/component/*.{d.ts,d.ets}',
  'ets/build-tools/ets-loader/declarations/global.d.ts',
], {
  absolute: false,
  onlyFiles: true,
  onlyDirectories: false,
  cwd: __dirname,
}).reduce((acc, file) => {
  acc[file] = fs.readFileSync(path.resolve(__dirname, file), 'utf-8')
  return acc
}, {} as Record<string, string>)

const etsApiFiles = fg.sync([
  'ets/api/**/*.{d.ts,d.ets}',
  'ets/kits/**/*.{d.ts,d.ets}',
  'ets/arkts/**/*.{d.ts,d.ets}',
], {
  absolute: false,
  onlyFiles: true,
  onlyDirectories: false,
  cwd: __dirname,
}).reduce((acc, file) => {
  acc[file] = fs.readFileSync(path.resolve(__dirname, file), 'utf-8')
  return acc
}, {} as Record<string, string>)

const generatedPath = path.resolve(__dirname, 'src/generated')

if (fs.existsSync(generatedPath))
  fs.rmSync(generatedPath, { recursive: true, force: true })

const globalScopePath = path.resolve(generatedPath, 'global')
const apiPath = path.resolve(generatedPath, 'api')

if (!fs.existsSync(generatedPath))
  fs.mkdirSync(generatedPath, { recursive: true })
if (!fs.existsSync(globalScopePath))
  fs.mkdirSync(globalScopePath, { recursive: true })
if (!fs.existsSync(apiPath))
  fs.mkdirSync(apiPath, { recursive: true })

const globalFileNames: string[] = []

for (const file of Object.keys(etsGlobalScopeFiles)) {
  let outputFile = path.resolve(globalScopePath, path.basename(file).replace(/.d.ts$/, '.ts').replace(/.d.ets$/, '.ts'))
  if (fs.existsSync(outputFile)) {
    outputFile = path.resolve(globalScopePath, `${path.basename(file).replace(/.d.ts$/, '').replace(/.d.ets$/, '')}-1.ts`)
    console.warn(`${outputFile} already exists, renaming to ${outputFile}.`)
    globalFileNames.push(path.basename(outputFile))
  }
  else {
    globalFileNames.push(path.basename(file))
  }
  fs.writeFileSync(outputFile, `import type { GeneratedEtsLibFile } from "../../types/generated";

export const FILE: GeneratedEtsLibFile = {
  path: '${file}',
  content: ${JSON.stringify(etsGlobalScopeFiles[file], null, 2)},
}
export default FILE;`)
}

const apiFileNames: string[] = []

for (const file of Object.keys(etsApiFiles)) {
  let outputFile = path.resolve(apiPath, path.basename(file).replace(/.d.ts$/, '.ts').replace(/.d.ets$/, '.ts'))
  if (fs.existsSync(outputFile)) {
    outputFile = path.resolve(apiPath, `${path.basename(file).replace(/.d.ts$/, '').replace(/.d.ets$/, '')}-1.ts`)
    console.warn(`${outputFile} already exists, renaming to ${outputFile}.`)
    apiFileNames.push(path.basename(outputFile))
  }
  else {
    apiFileNames.push(path.basename(file))
  }
  fs.writeFileSync(outputFile, `import type { GeneratedEtsLibFile } from "../../types/generated";

export const FILE: GeneratedEtsLibFile = {
  path: '${file}',
  content: ${JSON.stringify(etsApiFiles[file], null, 2)},
}
export default FILE;`)
}

fs.writeFileSync(path.resolve(generatedPath, 'filenames.ts'), `export type GlobalFileNames = ${globalFileNames.map(file => `'${file.replace('.d.ts', '').replace('.d.ets', '').replace('.ts', '')}'`).join(' |\n ')};
export type ApiFileNames = ${apiFileNames.map(file => `'${file.replace('.d.ts', '').replace('.d.ets', '').replace('.ts', '')}'`).join(' |\n ')};
export const API_FILENAMES: ApiFileNames[] = ${JSON.stringify(apiFileNames.map(file => file.replace('.d.ts', '').replace('.d.ets', '').replace('.ts', '')), null, 2)};
export const GLOBAL_FILENAMES: GlobalFileNames[] = ${JSON.stringify(globalFileNames.map(file => file.replace('.d.ts', '').replace('.d.ets', '').replace('.ts', '')), null, 2)};`)

export default defineConfig([
  {
    entry: [
      'src/index.ts',
      'src/core.ts',
      'src/fallback.ts',
      'src/loader.ts',
    ],
    external: ['ohos-typescript'],
  },
  {
    entry: fg.sync('src/generated/global/*.ts', {
      cwd: __dirname,
      absolute: false,
      onlyFiles: true,
      onlyDirectories: false,
    }).reduce((acc, file) => {
      acc[path.join('generated', 'global', path.basename(file).replace('.ts', ''))] = file
      return acc
    }, {}),
    unbundle: true,
  },
  {
    entry: fg.sync('src/generated/api/@system.*.ts', {
      cwd: __dirname,
      absolute: false,
      onlyFiles: true,
      onlyDirectories: false,
    }).reduce((acc, file) => {
      acc[path.join('generated', 'api', path.basename(file).replace('.ts', ''))] = file
      return acc
    }, {}),
  },
  {
    entry: fg.sync('src/generated/api/@kit.*.ts', {
      cwd: __dirname,
      absolute: false,
      onlyFiles: true,
      onlyDirectories: false,
    }).reduce((acc, file) => {
      acc[path.join('generated', 'api', path.basename(file).replace('.ts', ''))] = file
      return acc
    }, {}),
  },
  {
    entry: fg.sync('src/generated/api/@ohos.*.ts', {
      cwd: __dirname,
      absolute: false,
      onlyFiles: true,
      onlyDirectories: false,
    }).reduce((acc, file) => {
      acc[path.join('generated', 'api', path.basename(file).replace('.ts', ''))] = file
      return acc
    }, {}),
  },
  {
    entry: fg.sync([
      'src/generated/api/*.ts',
      '!src/generated/api/@system.*.ts',
      '!src/generated/api/@kit.*.ts',
      '!src/generated/api/@ohos.*.ts',
    ], {
      cwd: __dirname,
      absolute: false,
      onlyFiles: true,
      onlyDirectories: false,
    }).reduce((acc, file) => {
      acc[path.join('generated', 'api', path.basename(file).replace('.ts', ''))] = file
      return acc
    }, {}),
  },
  {
    entry: {
      'generated/filenames': 'src/generated/filenames.ts',
    },
  },
])
