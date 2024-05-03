import {Args, Command} from '@oclif/core'
import * as fs from 'fs'
import {download} from '../../core/video/grab/index.js'

export default class Grab extends Command {
  static override args = {
    url: Args.string({description: 'URL of the video/playlist to download', required: true}),
    outputDir: Args.string({description: 'Output directory', required: true}),
  }

  static override description = 'Download a video from a URL. If it is a playlist, download all videos in the playlist.'

  static override examples = ['<%= config.bin %> <%= command.id %> ']

  static override flags = {}

  public async run(): Promise<void> {
    const {
      args: {url, outputDir},
    } = await this.parse(Grab)

    if (!fs.existsSync(outputDir)) {
      this.warn(`Output directory ${outputDir} does not exist, it will be created`)
      try {
        fs.mkdirSync(outputDir, {recursive: true})
      } catch (error: any) {
        return this.error(`Failed to create output directory: ${error.message}`)
      }
    }

    this.log(`Downloading video from ${url}...`)

    download(url, outputDir)
  }
}
