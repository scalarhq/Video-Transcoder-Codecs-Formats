# Video Transcoder Codec and Formats Support

This is a contributation repository for the [Wasm Video Transcoder](https://github.com/Mozilla-Open-Lab-Etwas/Video-Transcoder) at https://videotranscode.space/

We encourage users to submit codecs and format for review using pull requests, please follow the requirements below and if its passes the automated tests we will add it to the main product in the next build

## Adding Codecs

**Make sure ffmpeg supports your codec and find the ffmpeg cli command for the codec**

Please add the FFmpeg Docs and FFmpeg cli command in the pull request when adding a new codec

1. Create a new JS file in codecs folder with the name of the codec, please use camelCase
2. Add the required information below in that js file
3. Update the formats folder for each format that the codec supports
4. Submit Pull Request!

```
// Codec Example
module.exports = {
    name: "H.264", // User Facing Name of Codec
    compressionRange: { // FFmpeg Compression Ranges
      min: 1,
      max: 51,
    },
    ffmpegLib: "libx264" // FFmpeg Cli Codec Type
}
```
**If the formats are not updated with codec, they will not be displayed**
```
// Formats Example
module.exports = CODEC_TYPES => ({
    name: "MP4",
    extension: ".mp4",
    display: true,
    defaultCodec: null,
    type: "video/mp4",
    codecs: [CODEC_TYPES.H264, CODEC_TYPES.MPEG4], // Add to this list with the newly added Codec Type
})
```
