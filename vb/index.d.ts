export * from "./index";

import { PluginFunction } from "vue";
export interface VueBeautyVuePlugin {
    install: PluginFunction<Function>;
}
declare const VueBeauty: VueBeautyVuePlugin;

export default VueBeauty;
