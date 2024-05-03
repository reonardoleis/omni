import {getProvider} from './providers.js'

export const download = async (url: string, outputDir: string): Promise<void> => {
  const provider = getProvider(url)
  await provider(url, outputDir)
}
