import { UserConfig } from 'vite'

export interface LibConfigOptions {
  bundleInternalDeps?: boolean
  entry?: string
  dirname?: string
}

export declare function createLibConfig(globalName: string, options?: LibConfigOptions): UserConfig
