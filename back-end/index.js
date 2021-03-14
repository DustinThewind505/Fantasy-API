require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 8001;

server.listen(port, () => {
    console.log(`\n\n\n\t*** Server listening on port ${port} ***\n`)
})
