const codecs = require('./codecs')
const formats = require('./formats')

module.exports = () => ({
    name: 'video-transcoder-codecs-formats',
    resolveId (source) {
        if (source === 'codecs' || source === 'formats') return source
        return null
    },
    load (id) {
        if (id === 'codecs') return codecs
        if (id === 'formats') return formats(codecs)
        return null
    }
})