const app = require('./app.js')
const port = 4000
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
})