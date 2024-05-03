import {download} from './youtube.js'

export const getProvider = (url: string): ((url: string, outputDir: string) => Promise<void>) => {
  const service = new URL(url).hostname.split('.')[1]
  switch (service) {
    case 'youtube':
      return download
    default:
      throw new Error(`Unsupported video provider: ${service}`)
  }
}
