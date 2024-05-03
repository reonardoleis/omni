import youtubedl from 'youtube-dl-exec'

const grab = async (url: string, outputDir: string): Promise<void> => {
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

export {grab}
