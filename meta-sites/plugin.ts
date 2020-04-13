import * as wiki from "seran/wiki.ts";

export let plugins = ['/hello.mjs'];
export let handler = new wiki.Handler();
handler.page(wiki.welcomePage("[[DenoWiki]]", "[[Plugin]]"));
handler.items("Plugin", () => [
  wiki.item("hello", {text: "Hello, World! I'm a plugin."})
]);
handler.plugins(import.meta.url, "client");
