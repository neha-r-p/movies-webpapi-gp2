const server = require('./server');
// import { server } from './server.js'
// const { server } = require('./server.js')

const port = 8000
server.listen(port, () => console.log(`\napi running on port ${port}\n`))
