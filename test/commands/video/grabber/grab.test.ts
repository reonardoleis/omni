import {expect, test} from '@oclif/test'

describe('video/grabber:grab', () => {
  test
  .stdout()
  .command(['video/grabber:grab'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['video/grabber:grab', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
