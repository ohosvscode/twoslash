export interface GeneratedEtsLibFile {
  /**
   * The virtual file path of the generated file.
   */
  path: string
  /**
   * The content of the generated file.
   */
  content: string
}

export type EtsLibType = 'global' | 'api'
