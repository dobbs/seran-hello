import * as wiki from "seran/wiki.ts";

export let plugins = ['/hello.mjs'];
export let handler = new wiki.Handler();
handler.page(wiki.welcomePage("[[DenoWiki]]", "[[Crashes]]"));
handler.items("Crashes", () => [
  wiki.item("hello", {text: "Hello, World! I'm a hello."})
]);
handler.plugins(import.meta.url, "client");
