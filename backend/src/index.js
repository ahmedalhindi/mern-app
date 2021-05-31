const app = require("./app")
const db = require("./db")

const port = process.env.PORT || 3000
db.connect(() => console.log("MongoDB on: " + db.url))
app.listen(port, () => console.log(`Express on port: ` + port))
