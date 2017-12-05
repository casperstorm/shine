import fs from 'fs'

describe('config', () => {
  it('should exist', () => {
    fs.stat('./src/config/.env.production', (err, stats) => {
      expect(err).toBeNull()
      expect(stats.isFile()).toBe(true)
    })
  })
})
