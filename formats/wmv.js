module.exports = CODEC_TYPES => ({
    name: "WMV",
    extension: ".wmv",
    display: false,
    defaultCodec: CODEC_TYPES.WINDOWS,
    codecs: [CODEC_TYPES.WINDOWS],
})