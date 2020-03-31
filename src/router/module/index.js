const manageFiles = require.context('.', true, /\.js$/)

console.log(manageFiles.keys())
let configRouters = [];
manageFiles.keys().forEach( key => {
  if ( key === './index.js') return;
  configRouters = configRouters.concat(manageFiles(key).default)
})

export default configRouters
