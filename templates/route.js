const genAppRoute = (route_name) => {
  return `module.exports = (app) => {
        app.route('${route_name}s').get([], ${route_name}.findAll).post([],${route_name}.create)
        app.route('${route_name}s/:id').get([], ${route_name}.findById).put([],${route_name}.update).delete([],${route_name}.destroy)
    }
    `
}

const genFullAppRoute = (route_name, controller_path) => {
  return `
    const ${route_name} = require('${controller_path}')
    module.exports = (app) => {
          app.route('${route_name}s').get([], ${route_name}.findAll).post([],${route_name}.create)
          app.route('${route_name}s/:id').get([], ${route_name}.findById).put([],${route_name}.update).delete([],${route_name}.destroy)
      }
      `
}

module.exports = {
    genAppRoute,
    genFullAppRoute
}
