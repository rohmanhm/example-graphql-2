const sane = require('sane')
const execa = require('execa')

const watchSchema = sane('schema', {
  glob: ['**/*.js']
})

watchSchema.on('change', () => {
  execa.shell('yarn update-schema')
    .catch(e => {
      console.log('[DEVWATCHER]:', e)
    })
})
