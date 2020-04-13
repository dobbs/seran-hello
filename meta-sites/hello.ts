import * as wiki from "seran/wiki.ts";

export const handler = new wiki.Handler();
handler.page(wiki.welcomePage("[[DenoWiki]]", "[[Hello]]"));
handler.items("Hello", () => [
  wiki.item("paragraph", {text: "Hello, World! I'm a paragraph."})
]);
handler.plugins(import.meta.url, "client");
