import * as icons from "https://esm.sh/@tabler/icons@2.21.0"

await Deno.mkdir("./dist/icons", { recursive: true })

for(const [name, svg] of Object.entries(icons)){
  const filename = `./dist/icons/${name}.astro`
  const body = `${svg}`
  await Deno.writeTextFile(filename, body)
}

const entryCode = Object.keys(icons).map(name => `export { default as ${name} } from "./icons/${name}.astro";`).join("\n")

await Deno.writeTextFile("./dist/index.js", entryCode)
