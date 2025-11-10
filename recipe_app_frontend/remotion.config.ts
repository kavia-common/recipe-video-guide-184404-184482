/* See all configuration options: https://remotion.dev/docs/config
 Each option is also available as a CLI flag: https://remotion.dev/docs/cli

 Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs
*/

import { Config } from "@remotion/cli/config";

const env = process.env;

// Port handling with graceful fallback to 3000 as requested
const desiredPort = Number(env.REMOTION_PORT ?? 3000);
if (!Number.isNaN(desiredPort)) {
  Config.setPort(desiredPort);
}

// Keep defaults
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
