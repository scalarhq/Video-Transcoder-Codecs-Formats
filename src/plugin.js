import codecs from "./codecs";
import formats from "./formats";

export default () => ({
  name: "video-transcoder-codecs-formats",
  resolveId(source) {
    if (source === "codecs" || source === "formats") return source;
    return null;
  },
  load(id) {
    if (id === "codecs") return JSON.stringify(codecs);
    if (id === "formats") return JSON.stringify(formats);
    return null;
  },
});
