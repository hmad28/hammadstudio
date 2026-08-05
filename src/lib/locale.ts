import type { Locale } from "./types";
export function localHref(locale:Locale,path="/"){const clean=path==="/"?"":path;return locale==="en"?`/en${clean}`:clean||"/"}
