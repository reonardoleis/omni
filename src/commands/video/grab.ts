import {Args, Command} from '@oclif/core'
import {grab} from '../../core/video/grab/index.js'

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

    this.log(`Downloading video from ${url}`)

    await grab(url, outputDir)
  }
}
