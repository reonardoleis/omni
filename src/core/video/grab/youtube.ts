import youtubedl from 'youtube-dl-exec'

export const download = async (url: string, outputDir: string): Promise<void> => {
  youtubedl.exec(
    url,
    {
      format: 'bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]',
    },
    {
      cwd: outputDir,
    },
  )
}
