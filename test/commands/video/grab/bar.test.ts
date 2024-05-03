import {expect, test} from '@oclif/test'

describe('video/grab:bar', () => {
  test
  .stdout()
  .command(['video/grab:bar'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['video/grab:bar', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
