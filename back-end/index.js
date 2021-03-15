require('dotenv').config();
const server = require('./api/server');

const port = process.env.PORT || 8001;

server.get('/', (req, res) => {
    res.status(200).send(`<h1>Practice app running</h1>`)
})

server.use(function(req, res) {
    res.status(404).send(`<h1>🛑 404 could not find page 🛑</h1>`)
})

server.listen(port, () => {
    console.log(`\n\n\n\t*** Server listening on port ${port} ***\n`)
})
