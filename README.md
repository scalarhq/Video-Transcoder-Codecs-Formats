# Video Transcoder Codec and Formats Support

[![Mozilla-Open-Lab-Etwas](https://circleci.com/gh/Mozilla-Open-Lab-Etwas/Video-Transcoder-Codecs-Formats.svg?style=svg)](https://app.circleci.com/pipelines/github/Mozilla-Open-Lab-Etwas/Video-Transcoder-Codecs-Formats)
![Node.js CI](https://github.com/Mozilla-Open-Lab-Etwas/Video-Transcoder-Codecs-Formats/workflows/Node.js%20CI/badge.svg)


This is a repository meant for contribution to the [Wasm Video Transcoder](https://github.com/Mozilla-Open-Lab-Etwas/Video-Transcoder) project at https://videotranscode.space/

We encourage users to submit codecs and formats for review to expand our capabilities using pull requests. Please follow the requirements below and if it passes the automated tests we will add it to our main product in the next build.

## Adding Codecs

**Make sure ffmpeg supports your codec and please find the ffmpeg cli command for that respective codec**

Please add the FFmpeg Docs and FFmpeg cli command in the pull request when adding a new codec

1. Create a new JS file in codecs folder with the name of the codec, please use camelCase.
2. Add the required information in that js file.
3. Update the formats folder for each format that the codec supports.
4. Submit your pull request!

```
// Example on how to submit a codec.
module.exports = {
    name: "H.264", // The name of the codec from the user's perspective.
    compressionRange: { // The compression range for that codec in FFmpeg.
      min: 1,
      max: 51,
    },
    ffmpegLib: "libx264" // The codec library required by the CLI command.
}
```
**If the formats are not updated with codec, they will not be displayed**

*The codec's object name will be the file name you provided, that is, if you name your file h264.js then the object would be named H264*

```
// Example on how to submit a format.
module.exports = CODEC_TYPES => ({
    name: "MP4",
    extension: ".mp4",
    display: true,
    defaultCodec: null,
    type: "video/mp4",
    codecs: [CODEC_TYPES.H264, CODEC_TYPES.MPEG4], // Update this codec list for the format with the codec type you added above.
})
```
