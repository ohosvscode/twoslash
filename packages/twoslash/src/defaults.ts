import type { CompilerOptions, ModuleDetectionKind, ModuleKind, ScriptTarget } from 'typescript'
import type { HandbookOptions } from './types'
import { compilerOptions } from '../ets/build-tools/ets-loader/loader-config.json'

export const defaultCompilerOptions: CompilerOptions = {
  paths: {
    '*': [
      '/ets/api/*',
      '/ets/kits/*',
      '/ets/arkts/*',
    ],
  },
  strict: true,
  module: 99 satisfies ModuleKind.ESNext,
  target: 99 satisfies ScriptTarget.ESNext,
  allowJs: true,
  skipDefaultLibCheck: true,
  skipLibCheck: true,
  moduleDetection: 3 satisfies ModuleDetectionKind.Force,
  enableStrictCheckOHModule: true,
  skipOhModulesLint: false,
  experimentalDecorators: true,
  emitDecoratorMetadata: true,
  ets: compilerOptions.ets as any,
  strictPropertyInitialization: false,
  moduleResolution: 2 satisfies import('typescript').ModuleResolutionKind.NodeJs,
  etsAnnotationsEnable: true,
  compatibleSdkVersion: 20,
  // packageManagerType: 'ohpm',
  compatibleSdkVersionStage: 'beta2',
  alwaysStrict: true,
  mixCompile: true,
  tsImportSendableEnable: true,
  etsLoaderPath: 'ets/build-tools/ets-loader',
  resolveJsonModule: false,
}

export const defaultHandbookOptions: HandbookOptions = {
  errors: [],
  noErrors: false,
  noErrorsCutted: false,
  noErrorValidation: false,
  noStaticSemanticInfo: false,
  showEmit: false,
  showEmittedFile: undefined,
  keepNotations: false,
}

export const defaultLibs = [
  'lib.es2021.d.ts',
  'lib.decorators.legacy.d.ts',
]
