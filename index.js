const server = require("./server")

const PORT = process.env.PORT || 6000

server.listen(PORT, () => {
    console.log(`\n *** server running on http://localhost:5000 ** \n`)
})