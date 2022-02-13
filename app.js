const yargs = require("yargs")
const prompts = require("prompts")
const fs = require("fs")
const { genAppRoute, genFullAppRoute } = require("./templates/route")

const { argv } = yargs.option("o", {
  alias: "file_option",
  describe: "file option",
  type: "string",
})

const { file_option } = argv
console.log({
  file_option,
})

let controller_path = null

const genController = async () => {
  const response = await prompts({
    type: "text",
    name: "controller_name",
    message: "What is your controller name?",
  })
  const { controller_name } = response
  const path = `controllers/${controller_name}`
  await fs.mkdirSync(path, { recursive: true })
  const content = await fs.readFileSync("templates/controller.js", {
    encoding: "utf-8",
  })
  const file_path = `${path}/${controller_name}.controller.js`
  controller_path = `../../${file_path}`
  await fs.writeFileSync(file_path, content)
}

const genRoute = async (option) => {
  const response = await prompts({
    type: "text",
    name: "route_name",
    message: "What is your route name?",
  })
  const { route_name } = response
  const path = `routes/${route_name}`
  await fs.mkdirSync(path, { recursive: true })
  const file_path = `${path}/${route_name}.routes.js`
  option === "normal" ? await fs.writeFileSync(file_path, genAppRoute(route_name)) : await fs.writeFileSync(file_path, genFullAppRoute(route_name, controller_path))
}

if (file_option === "controller") {
  genController()
} else if (file_option === "route") {
  genRoute("normal")
} else if (file_option === "resource") {
  ;(async() => {
    await genController()
    await genRoute("full")
  })()
}
